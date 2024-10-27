# Data-Driven Testing Plan

## User Story
As a tester, I want to verify that the system can compare student reports against the database of known supernatural entities to identify potential matches.

## Objective
We want to ensure that the similarity calculation between user-submitted reports and entities in the database is accurate and performant.
Our application is data-focused. Therefore, the testing plan should be focused around the accuracy of the text similarity calculations. 
We want to ensure that the output meets a certain threshold of accuracy based on the input data. 
When calculating text similarity, the threshold will be based on our subjective assessment of similarity. 
For example, if the 2 texts say almost exactly the same thing, the threshold should be greater than 85%.

## Framework
Based on these goals, I'm going to employ the Data-Driven Testing Framework. 

## Coverage
* Highly similar text pairs (>= 0.75 score)
* Dissimilar text pairs (< 0.5 score)
* Edge cases (e.g., empty or one-word inputs)

## Software Library
pytest is widely used for Python projects and support plugins for DDT. It has good support for writing fixtures and parameterized tests. 
The "Comparative Analysis Tools" component of our application manages the data processing, therefore, I chose a Python testing library.

## Conclusion
1. This plan makes sense with our particular application because our application is data-driven. 
2. It is achievable within the constraints of our Software Development Plan, as it can be developed alongside the Comparative Analysis Tools.
3. It will adequately verify that the system can compare student reports against the database of known supernatural entities to identify potential matches.
