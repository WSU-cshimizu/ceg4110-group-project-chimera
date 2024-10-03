# Requirements Specification

## User Story 1

_As a user, I want to be able to submit reports of my paranormal experience, so that I can share my experience and contribute towards the investigation._

1. User Registration and Authentication
   1. The system must allow users to register with a valid email and create a password.
   2. The system must provide a secure login system for users to access the report submission feature.
   3. Users must be able to reset their password in case of loss.
2. Report Submission
- The system must allow users to submit reports of their paranormal experiences.
- The submission form should include fields for:
  - **Title of Experience** (text field, mandatory)
  - **Date and Time** of the experience (date and time picker, mandatory)
  - **Location** of the experience (text field, mandatory)
  - **Description** of the experience (rich text editor or multiline text field, mandatory)
  - **Entity Description** (if applicable: text field, optional)
  - **Additional Evidence** such as images, videos, or audio files (optional, max size 10 MB)
  - **Witnesses** (optional list of witness names or details)
- Users must have the ability to edit or delete their submitted reports.

## User Story 2

_As a user, I want to be able to see reports of other people's entity sightings, so that I can stay informed about what's going on._

1. User Access to Sighting Reports
  1. The system must allow users to browse through reports submitted by others without needing to submit a remport themselves.
  2. Users must be able to search for specific reports based on keywords (such as the entity name, location, or date of the sighting).
  3. Users must be able to filter report based on criteria such as:
    - Date of Report
    - Location
    - Entity Type
    - Most Recent or Most Popular Reports
  4. Reports must be displayed in a user friendly format that includes key details such as:
    - Title of the report
    - Date and Time of the sighting
    - Location of the sighting
    - Entity Description
    - Additional Evidence (If available: images, videos, audio files)
2. Report Details
  1. Users must be able to click on a report to view full details, including the complete description of the sighting and any additional evidence.
  2. The system must provide a feature to upvote or favorite reports that users find particularly useful or interesting.
  3. Users should be able to share reports via social media or direct links.
3. User Integration with Reports
  1. Registered users must have the ability to comment on other users' reports.
  2. Users should be able to report inappropriate content within a report to the system administrators.


## User Story 3

_As a user, I want to be able to view a dictionary of all known entities, so that I can learn more about them and compare my experiences._

1. The system must allow users to view a dictionary of all entities described in the database.
   1. The system must allow users to browse through the dictionary without needing to submit a report.
   2. Users must be able to search for specific entities based on keywords (such as the entity name, abilities, or details of description).
2. The dictionary page should include details for:
  - **Name of Entity Type** 
  - **Details of Entity Origin** Historical details regarding the entity such as how it came to be, etc
  - **Entity Abilities** What the entity is able to do which is unique from other entities
  - **Description of Entity Behavior** How the entity usually reacts in it's enviroment.
  - **Description of Entity Appearance** What the entity is reported to look like usually.
  - **Entity Known Evidence** such as UV, EMF5, Ghost Writing, D.O.T.S, Ghost Orbs, Spirit Box, and Freezing Temperatures
    
## User Story 4
_As a user, I want to be able to see possible entities that match my report, to better understand what I've experienced._
1. Requirement 4.1
  1. Requirement 4.1.1
2. Requirement 4.2

## User Story 5
_As an admin user, I want to have special access to manage user reports, so that I ensure accurate and relevant information._

1. The system must allow admins to delete/remove reports from the list of viewable reports.
2. Deleted reports will not remove the report from a database but will replace the reports with nulls.
3. Nullified reports will not contribute to the comparison analysis tools.
4. Nullified reports will be hidden from view of all users other than admins.
5. Nullified reports will be fully nulled other than the report ID.


## User Story 6
_As a backend developer of comparative analysis tools, I would like to be able to see the relationships between our different entities, reports, and locations so I can correlate the acquired data._
1. Requirement 6.1
  1. Requirement 6.1.1
2. Requirement 6.2

## User Story 7
_As a backend developer, I want to be able to interface with the database and frontend, so that data can flow back and forth between them._
1. Requirement 7.1
  1. Requirement 7.1.1
2. Requirement 7.2

## User Story 8
_As a database designer, I want to understand the data that we're interested in collecting, so that I can determine data types and create a schema._
1. Requirement 8.1
  1. Requirement 8.1.1
2. Requirement 8.2

## User Story 9
_As a frontend developer, I want to design a user-friendly interface that allows users to input relevant data, so that the information can be collected accurately and efficiently._
1. Requirement 9.1
  1. Requirement 9.1.1
2. Requirement 9.2

## User Story 10
_As a frontend developer, I want to implement validation rules for user inputs, so that only valid and clean data is sent to the backend for processing._
1. Requirement 10.1
  1. Requirement 10.1.1
2. Requirement 10.2

## User Story 11
_As a frontend developer, I want to be able to interface with the backend, so that I can access the data to display to the user._
1. Requirement 11.1
  1. Requirement 11.1.1
2. Requirement 11.2
