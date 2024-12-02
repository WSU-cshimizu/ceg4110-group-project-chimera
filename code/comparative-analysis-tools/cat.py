import json

import sys
from data_access import get_reports_data, get_entities, get_locations

import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def parse_entity(entity_fields):
    # Parse known entities
    entity_id = entity_fields['keid']
    type = entity_fields['ketype']
    origin = entity_fields['keorigin']
    abilities = entity_fields['keabilities']
    behavior = entity_fields['kebehavior']
    appearance = entity_fields['keappearance']

    ghost_orbs = ""
    if bool(entity_fields['keghostorbs']):
        ghost_orbs = "ghost orbs. "

    freezing_temp = ""
    if bool(entity_fields['kefreezingtemp']):
        freezing_temp = "freezing temperature. "

    ghost_writing = ""
    if bool(entity_fields['keghostwriting']):
        ghost_writing = "ghost writing. frantic scribbling. "

    # Combine entity information into a single text
    paragraph = origin + " " + abilities + " " + behavior + " " + appearance + " " + ghost_orbs + freezing_temp + ghost_writing
    # print(f"\nEntity paragraph {type}: {paragraph}")

    return entity_id, paragraph


def preprocess(txt, model, return_doc=False):
    # Convert text to lowercase and process it with spaCy
    doc = model(txt.lower())

    # Lemmatize, remove stop words, remove punctuation, and remove repeats
    seen_tokens = set()  # Set to track unique tokens
    processed_tokens = [
        token for token in doc
        if not token.is_stop and not token.is_punct and token.lemma_ not in seen_tokens and not seen_tokens.add(token.lemma_)
    ]

    if return_doc:
        # If returning a doc, recreate it with filtered tokens
        return model.make_doc(" ".join(token.lemma_ for token in processed_tokens))
    
    # Otherwise, return as text
    return " ".join(token.lemma_ for token in processed_tokens)


def extract_keywords(txt, model):
    """Extract keywords from the text based on noun phrases and rank them using TF-IDF."""
    doc = model(txt)
    noun_phrases = [chunk.text for chunk in doc.noun_chunks]
    vectorizer = TfidfVectorizer()
    tfidf = vectorizer.fit_transform([doc.text])
    top_phrases = sorted(vectorizer.vocabulary_, key=lambda x: tfidf[0, vectorizer.vocabulary_[x]], reverse=True)

    return set(top_phrases)


def calculate_cosine_similarity(txt1, txt2):
    """Calculate similarity between two text strings using TF-IDF and cosine similarity."""
    vectorizer = TfidfVectorizer().fit([txt1, txt2])
    tfidf_matrix = vectorizer.transform([txt1, txt2])
    similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
    return similarity


def guess_reported_entity(report_text, entities, model):
    # Extract report keywords
    report_kwords = extract_keywords(report_text, model)

    entity_scores = {}
    for entity in entities:
        # entity_type, entity_text = parse_entity(entity)
        entity_id, entity_text = parse_entity(entity)
        clean_entity_text = preprocess(entity_text, model)
        entity_similarity = calculate_cosine_similarity(report_text, clean_entity_text)

        if entity_similarity > 0:
            # entity_scores[entity_type] = entity_similarity
            entity_scores[entity_id] = entity_similarity

            # Find common keywords
            entity_kwords = extract_keywords(clean_entity_text, model)
            common_keywords = report_kwords.intersection(entity_kwords)

    return entity_scores


def main():
    # Get the report ID from command-line arguments
    # report_id = sys.argv[1]

    # Fetch all reports, entities, and locations
    all_reports = get_reports_data()
    known_entities = get_entities()
    locations = get_locations()
    
    # new_report = report_to_analyze['reportedevidence']
    new_report = sys.argv[1]

    nlp = spacy.load("en_core_web_sm")

    clean_report = preprocess(new_report, nlp)

    # Compare report with known entities
    entity_scores = guess_reported_entity(clean_report, known_entities, nlp)
    if entity_scores:
        # Sort the entities by similarity score in descending order
        # print("entity_scores: ", entity_scores)
        sorted_entity_scores = sorted(entity_scores.items(), key=lambda item: item[1], reverse=True)

        # Display the sorted scores
        # print("\nEntities ranked by similarity:")
        for entity_id, score in sorted_entity_scores:
            # print(f"{entity_type}: {score:.4f}")

            best_entity = max(entity_scores, key=entity_scores.get)
            best_score = entity_scores[best_entity]
        # print(f"\nEntity with the highest score: {best_entity} (Score: {best_score})")

        # Multiply score by 100 and round it to an int or one decimal place for readability
        # score_percentage = round(best_score * 100, 1)
        # print(f"Entity with the highest score: {best_entity} (Score: {score_percentage})")

        # Map the score to a qualitative description
        # def interpret_score(score):
        #     if score >= 0.07:
        #         return "Very High"
        #     elif score >= 0.04:
        #         return "High"
        #     elif score >= 0.02:
        #         return "Moderate"
        #     elif score >= 0.01:
        #         return "Low"
        #     else:
        #         return "Very Low"
        # score_description = interpret_score(best_score)

        # Rescale the score to fit within a more intuitive range
        # normalized_score = round(best_score * 10, 1)  # Scale to 0-10 for simplicity
        # print(f"Entity with the highest score: {best_entity} (Score: {score_description} - {normalized_score}/10)")

    # else:
    #     print(f"\nNo entities matched with a score about 0.")


    # Output the analysis result (stdout will be captured by Express.js)
    # print(json.dumps(sorted_entity_scores))
    # print(json.dumps(entity_scores))
    computed_entity_id = best_entity
    print(json.dumps({"computedEntityId": computed_entity_id}))


if __name__ == '__main__':
    main()
