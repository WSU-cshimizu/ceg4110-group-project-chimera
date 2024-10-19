# Requirements Specification

## User Story 1

_As a user, I want to be able to submit reports of my paranormal experience, so that I can share my experience and contribute towards the investigation._

### 1.1 User Registration and Authentication

&emsp;**1.1.1** The system shall allow users to register with a valid email and create a password.  
&emsp;**1.1.2** The system shall provide a secure login system for users to access the report submission feature.  
&emsp;**1.1.3** Users shall be able to reset their password in case of loss.

### 1.2 Report Submission

&emsp;**1.2.1** The system shall allow users to submit reports of their paranormal experiences.

&emsp;**1.2.2** The submission form shall include the following fields:

&emsp;&emsp;- **Title of Experience** (text field, mandatory)  
&emsp;&emsp;- **Date and Time** of the experience (date and time picker, mandatory)  
&emsp;&emsp;- **Location** of the experience (text field, mandatory)  
&emsp;&emsp;- **Description** of the experience (rich text editor or multiline text field, mandatory)  
&emsp;&emsp;- **Entity Description** (if applicable: text field, optional)  
&emsp;&emsp;- **Additional Evidence** such as images, videos, or audio files (optional, max size 10 MB)  
&emsp;&emsp;- **Witnesses** (optional list of witness names or details)

&emsp;**1.2.3** Users shall have the ability to edit or delete their submitted reports.

### Data Flow Diagram
![User Story 1](https://github.com/user-attachments/assets/aaf08ef6-5685-4eef-bbc6-f5084e2c36e5)

## User Story 2

_As a user, I want to be able to see reports of other people's entity sightings, so that I can stay informed about what's going on._

### 2.1 User Access to Sighting Reports

&emsp;**2.1.1** The system shall allow users to browse through reports submitted by others without needing to submit a report themselves.  
&emsp;**2.1.2** Users shall be able to search for specific reports based on keywords (such as the entity name, location, or date of the sighting).

&emsp;**2.1.3** Users shall be able to filter report based on criteria such as:

&emsp;&emsp;- **Date of Report**  
&emsp;&emsp;- **Location**  
&emsp;&emsp;- **Entity Type**  
&emsp;&emsp;- **Most Recent or Most Popular Reports**

&emsp;**2.1.4** Reports shall be displayed in a user friendly format that includes key details such as:

&emsp;&emsp;- **Title** of the report  
&emsp;&emsp;- **Date and Time** of the sighting  
&emsp;&emsp;- **Location** of the sighting  
&emsp;&emsp;- **Entity Description**  
&emsp;&emsp;- **Additional Evidence** (If available: images, videos, audio files)

### 2.2 Report Details

&emsp;**2.2.1** Users shall be able to click on a report to view full details, including the complete description of the sighting and any additional evidence.  
&emsp;**2.2.2** The system shall provide a feature to upvote or favorite reports that users find particularly useful or interesting.  
&emsp;**2.2.3** Users shall be integrated with Reports.  
&emsp;**2.2.4** Users shall be able to report inappropriate content within a report to the system administrators.

### Data Flow Diagram
![UserStory2 drawio (1)](https://github.com/user-attachments/assets/d4cbc76b-0433-485b-90f2-aad50809ec72)

## User Story 3

_As a user, I want to be able to view a dictionary of all known entities, so that I can learn more about them and compare my experiences._

### 3.1 Entity Dictionary Access

&emsp;**3.1.1** The system shall allow users to view a dictionary of all entities described in the database.  
&emsp;**3.1.2** The system shall allow users to browse through the dictionary without needing to submit a report.  
&emsp;**3.1.3** Users shall be able to search for specific entities based on keywords (such as the entity name, abilities, or details of description).

### 3.2 Entity Dictionary Details

&emsp;**3.2.1** The dictionary page should include details for:

&emsp;&emsp;- **Name of Entity Type**  
&emsp;&emsp;- **Details of Entity Origin**: Historical details regarding the entity such as how it came to be and its lore.  
&emsp;&emsp;- **Entity Abilities**: What the entity is able to do which is unique from other entities  
&emsp;&emsp;- **Description of Entity Behavior**: How the entity usually reacts in it's enviroment.  
&emsp;&emsp;- **Description of Entity Appearance**: What the entity is reported to look like usually.  
&emsp;&emsp;- **Entity Known Evidence**: such as UV, EMF5, Ghost Writing, D.O.T.S, Ghost Orbs, Spirit Box, and Freezing Temperatures

### Data Flow Diagram
![UserStory3 drawio](https://github.com/user-attachments/assets/59325699-1195-469e-b7c2-3952eec3c8df)

## User Story 4

_As a user, I want to be able to see possible entities that match my report, to better understand what I've experienced._

### 4.1 Entity Matching

&emsp;**4.1.1** The system shall analyze the user's submitted report and compare it against a database of known entities.

&emsp;**4.1.2** The system shall use key details from the report, such as:

&emsp;&emsp;- **Entity Description** (apperance, behavior, abilities)  
&emsp;&emsp;- **Location**  
&emsp;&emsp;- **Date and Time** of the sighting  
&emsp;&emsp;- **Additinal Evidence** (Images, Videos, Audio Files)

&emsp;**4.1.3** The system shall provide a list of possible entities that are similar to the report.

&emsp;**4.1.4** The potential matches shall include:

&emsp;&emsp;- **Entity Name**  
&emsp;&emsp;- **Description of Entity** (appearance, behavior, sightings history)  
&emsp;&emsp;- **Known Locations**  
&emsp;&emsp;- **Associated Reports**  
&emsp;&emsp;- **Likelihood Score** (Percentage match based on report details)

### 4.2 Entity Information Display

&emsp;**4.2.1** Users shall be able to click on a potential match to view more details about the entity, including:

&emsp;&emsp;- **Historical Background** (if available)  
&emsp;&emsp;- **Previous Sightings** (with links to related reports)  
&emsp;&emsp;- **Phyiscal or Behavioural Traits** of the entity  
&emsp;&emsp;- **Any Known Evidence** (photos, videos, descriptions from witnesses)

&emsp;**4.2.2** Users shall be able to compare multiple entities side-by-side to determine the best match

### 4.3 User Feedback on Matches

&emsp; **4.3.1** Users shall be able to provide feedback on the accuracy of the entity matches by selecting options such as "Very Accurate", "Somewhat Accurate", "Not Accurate".  
&emsp; **4.3.2** Users shall have the option to suggest new entities if they believe none of the matches are correct. These suggestions can be reviewed by the system administrators.

## User Story 5

_As an admin user, I want to have special access to manage user reports, so that I ensure accurate and relevant information._

### 5.1 Admin Access to Manage Reports

&emsp;**5.1.1** The system shall allow admins to delete or remove reports from the list of viewable reports.  
&emsp;**5.1.2** Deleted reports shall not remove the report from a database but be nullified, replacing their contents with null values.  
&emsp;**5.1.3** Nullified reports shall not contribute to the comparison analysis tools.  
&emsp;**5.1.4** Nullified reports shall be hidden from view of all users other than admins.  
&emsp;**5.1.5** Nullified reports shall be fully nulled other than the report ID.

## User Story 6

_As a backend developer of comparative analysis tools, I would like to be able to see the relationships between our different entities, reports, and locations so I can correlate the acquired data._

### 6.1 Entity-Report Relationships

&emsp;**6.1.1** The system shall maintain a database of relationships between reports and their corresponding entities.  
&emsp;**6.1.2** The system shall provide tools for visualizing these relationships through diagrams or tables for analysis.

### 6.2 Location Data

&emsp;**6.2.1** The system shall track the geographical distribution of reports to identify hotspots for entity sightings.  
&emsp;**6.2.2** The system shall allow for location-based filtering and reporting tools.

## User Story 7

_As a backend developer, I want to be able to interface with the database and frontend, so that data can flow back and forth between them._

### 7.1 Database Interaction

&emsp;**7.1.1** The system shall provide an API for the frontend to communicate with the database.  
&emsp;**7.1.2** The API shall allow for CRUD (Create, Read, Update, Delete) operations on reports, entities, and user data.

### 7.2 Data Validation

&emsp;**7.2.1** The system shall ensure that all data sent to the database adheres to specified validation rules before being stored.

### Data Flow Diagram
![UserStory7 drawio](https://github.com/user-attachments/assets/4516c0ca-ddd4-4047-91fb-46692faa41c2)

## User Story 8

_As a database designer, I want to understand the data that we're interested in collecting, so that I can determine data types and create a schema._

### 8.1 Data Collection Requirements

&emsp;**8.1.1** The database schema shall include tables for users, reports, known entities, and locations.  
&emsp;**8.1.2** Each table shall have clearly defined relationships to ensure data integrity.

### 8.2 Schema Design

&emsp;**8.2.1** The schema shall be designed using appropriate data types (e.g., VARCHAR, TEXT, DATETIME, BLOB) based on the nature of the data being collected.  
&emsp;**8.2.2** The schema shall include indexing on frequently searched fields (e.g., entity name, report date) to optimize performance.

## User Story 9

_As a frontend developer, I want to design a user-friendly interface that allows users to input relevant data, so that the information can be collected accurately and efficiently._

### 9.1 User Interface Design

&emsp;**9.1.1** The interface shall be intuitive and easy to navigate.  
&emsp;**9.1.2** The interface shall provide clear labels and placeholders for input fields to guide users through the data entry process.

### 9.2 Real-time Validation

&emsp;**9.2.1** The interface shall implement real-time validation to ensure that data is accurate and formatted correctly before submission.  
&emsp;**9.2.2** Users shall be alerted to any issues with their input as they fill out the form.



## User Story 10

_As a frontend developer, I want to implement validation rules for user inputs, so that only valid and clean data is sent to the backend for processing._

### 10.1 Input Validation

&emsp;**10.1.1** The system shall validate all input fields for:  
&emsp;&emsp;- **Required Fields**: The system shall ensure mandatory fields are filled.  
&emsp;&emsp;- **Format Checks**: The system shall validate email formats, date/time formats, and file types for evidence uploads.

### 10.2 Error Handling

&emsp;**10.2.1** The system shall provide user-friendly error messages for any validation failures, indicating what needs to be corrected.

### Data Flow Diagram
![User Story 10](https://github.com/user-attachments/assets/868cf7e0-abdf-4920-8cea-d1752b5c103e)

## User Story 11

_As a frontend developer, I want to be able to interface with the backend, so that I can access the data to display to the user._

### 11.1 API Integration

&emsp;**11.1.1** The frontend shall communicate with the backend API to retrieve user data, reports, and entity information.  
&emsp;**11.1.2** The system shall handle API responses and update the user interface accordingly.

### 11.2 Data Synchronization

&emsp;**11.2.1** The system shall ensure that the frontend displays the most current data from the backend.  
&emsp;**11.2.2** The system shall implement caching strategies where appropriate to improve performance.

### Data Flow Diagram
![User Story 11](https://github.com/user-attachments/assets/b355c172-15be-414b-86e4-d0b3b8e6c424)

## User Story 12 Testing

_As a tester, I want to verify that the system can compare student reports against the database of known supernatural entities to identify potential matches._

### 12.1 Match Verification

&emsp;**12.1.1** Test cases shall be created to ensure that the matching algorithm produces accurate results based on varied user report scenarios.  
&emsp;**12.1.2** The system shall ensure that any updates or changes made to the database are reflected accurately in the entity matching results.

## User Story 13 Testing

_As a tester, I want to verify that the software is intuitive and user-friendly, and that all validations are properly enforced to ensure effective error handling and smooth user interactions._

### 13.1 Usability Testing

&emsp;**13.1.1** The testers shall conduct usability tests to gather feedback on the user interface and overall experience.  
&emsp;**13.1.2** The system shall be evaluated based on user feedback to identify any pain points in the user journey.

### 13.2 Validation Testing

&emsp;**13.2.1** Test cases shall be designed to ensure all validation rules are enforced before data is sent to the backend.  
&emsp;**13.2.2** The system shall be tested to confirm that appropriate error messages are displayed when validation fails.

# Design Specification
