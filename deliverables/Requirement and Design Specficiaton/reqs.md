# Requirements Specification

## User Story 1

_As a user, I want to be able to submit reports of my paranormal experience, so that I can share my experience and contribute towards the investigation._

### 1.1 User Registration and Authentication

&emsp;**1.1.1** The system must allow users to register with a valid email and create a password.  
&emsp;**1.1.2** The system must provide a secure login system for users to access the report submission feature.  
&emsp;**1.1.3** Users must be able to reset their password in case of loss.

### 1.2 Report Submission

&emsp;**1.2.1** The system must allow users to submit reports of their paranormal experiences.

&emsp;**1.2.2** The submission form should include the following fields:

&emsp;&emsp;- **Title of Experience** (text field, mandatory)  
&emsp;&emsp;- **Date and Time** of the experience (date and time picker, mandatory)  
&emsp;&emsp;- **Location** of the experience (text field, mandatory)  
&emsp;&emsp;- **Description** of the experience (rich text editor or multiline text field, mandatory)  
&emsp;&emsp;- **Entity Description** (if applicable: text field, optional)  
&emsp;&emsp;- **Additional Evidence** such as images, videos, or audio files (optional, max size 10 MB)  
&emsp;&emsp;- **Witnesses** (optional list of witness names or details)

&emsp;**1.2.3** Users must have the ability to edit or delete their submitted reports.

## User Story 2

_As a user, I want to be able to see reports of other people's entity sightings, so that I can stay informed about what's going on._

### 2.1 User Access to Sighting Reports

&emsp;**2.1.1** The system must allow users to browse through reports submitted by others without needing to submit a report themselves.  
&emsp;**2.1.2** Users must be able to search for specific reports based on keywords (such as the entity name, location, or date of the sighting).  

&emsp;**2.1.3** Users must be able to filter report based on criteria such as:

&emsp;&emsp;- **Date of Report**  
&emsp;&emsp;- **Location**  
&emsp;&emsp;- **Entity Type**  
&emsp;&emsp;- **Most Recent or Most Popular Reports**  

&emsp;**2.1.4** Reports must be displayed in a user friendly format that includes key details such as:

&emsp;&emsp;- **Title** of the report  
&emsp;&emsp;- **Date and Time** of the sighting  
&emsp;&emsp;- **Location** of the sighting  
&emsp;&emsp;- **Entity Description**  
&emsp;&emsp;- **Additional Evidence** (If available: images, videos, audio files)  

### 2.2 Report Details

&emsp;**2.2.1** Users must be able to click on a report to view full details, including the complete description of the sighting and any additional evidence.  
&emsp;**2.2.2** The system must provide a feature to upvote or favorite reports that users find particularly useful or interesting.  
&emsp;**2.2.3** Users should be able to share reports via social media or direct links.  
&emsp;**2.2.4** User Integration with Reports.  
&emsp;**2.2.5** Registered users must have the ability to comment on other users' reports.  
&emsp;**2.2.6** Users should be able to report inappropriate content within a report to the system administrators.  

## User Story 3

_As a user, I want to be able to view a dictionary of all known entities, so that I can learn more about them and compare my experiences._

### 3.1 Entity Dictionary Access  

&emsp;**3.1.1** The system must allow users to view a dictionary of all entities described in the database.  
&emsp;**3.1.2** The system must allow users to browse through the dictionary without needing to submit a report.  
&emsp;**3.1.3** Users must be able to search for specific entities based on keywords (such as the entity name, abilities, or details of description).  

### 3.2 Entity Dictionary Details  

&emsp;**3.2.1** The dictionary page should include details for:  

&emsp;&emsp;- **Name of Entity Type**  
&emsp;&emsp;- **Details of Entity Origin**: Historical details regarding the entity such as how it came to be and its lore.  
&emsp;&emsp;- **Entity Abilities**: What the entity is able to do which is unique from other entities  
&emsp;&emsp;- **Description of Entity Behavior**: How the entity usually reacts in it's enviroment.  
&emsp;&emsp;- **Description of Entity Appearance**: What the entity is reported to look like usually.  
&emsp;&emsp;- **Entity Known Evidence**: such as UV, EMF5, Ghost Writing, D.O.T.S, Ghost Orbs, Spirit Box, and Freezing Temperatures  

## User Story 4

_As a user, I want to be able to see possible entities that match my report, to better understand what I've experienced._

### 4.1 Entity Matching  

&emsp;**4.1.1** The system must analyze the user's submitted report and compare it against a database of known entities.  

&emsp;**4.1.2** The system must use key details from the report, such as:  

&emsp;&emsp;- **Entity Description** (apperance, behavior, abilities)  
&emsp;&emsp;- **Location**  
&emsp;&emsp;- **Date and Time** of the sighting  
&emsp;&emsp;- **Additinal Evidence** (Images, Videos, Audio Files)  

&emsp;**4.1.3** The system must provide a list of possible entities that are similar to the report.  

&emsp;**4.1.4** The potential matches must include:  

&emsp;&emsp;- **Entity Name**  
&emsp;&emsp;- **Description of Entity** (appearance, behavior, sightings history)  
&emsp;&emsp;- **Known Locations**  
&emsp;&emsp;- **Associated Reports**  
&emsp;&emsp;- **Likelihood Score** (Percentage match based on report details)  

### 4.2 Entity Information Display  

&emsp;**4.2.1** Users must be able to click on a potential match to view more details about the entity, including:  

&emsp;&emsp;- **Historical Background** (if available)  
&emsp;&emsp;- **Previous Sightings** (with links to related reports)  
&emsp;&emsp;- **Phyiscal or Behavioural Traits** of the entity  
&emsp;&emsp;- **Any Known Evidence** (photos, videos, descriptions from witnesses)  

&emsp;**4.2.2** Users should be able to compare multiple entities side-by-side to determine the best match  

### 4.3 User Feedback on Matches  

&emsp;**4.3.1** Users must be able to provide feedback on the accuracy of the entity matches by selecting options such as "Very Accurate", "Somewhat Accurate", "Not Accurate".  
&emsp;**4.3.2** Users should have the option to suggest new entities if they believe none of the matches are correct. These suggestions can be reviewed by the system administrators.  

## User Story 5

_As an admin user, I want to have special access to manage user reports, so that I ensure accurate and relevant information._

### 5.1 Admin Access to Manage Reports  

&emsp;**5.1.1** The system must allow admins to delete or remove reports from the list of viewable reports.  
&emsp;**5.1.2** Deleted reports will not remove the report from a database but be nullified, replacing their contents with null values.  
&emsp;**5.1.3** Nullified reports will not contribute to the comparison analysis tools.  
&emsp;**5.1.4** Nullified reports will be hidden from view of all users other than admins.  
&emsp;**5.1.5** Nullified reports will be fully nulled other than the report ID.  

## User Story 6

_As a backend developer of comparative analysis tools, I would like to be able to see the relationships between our different entities, reports, and locations so I can correlate the acquired data._

1. Requirement 6.1
1. Requirement 6.1.1
1. Requirement 6.2

## User Story 7

_As a backend developer, I want to be able to interface with the database and frontend, so that data can flow back and forth between them._

1. Requirement 7.1
1. Requirement 7.1.1
1. Requirement 7.2

## User Story 8

_As a database designer, I want to understand the data that we're interested in collecting, so that I can determine data types and create a schema._

1. Requirement 8.1
1. Requirement 8.1.1
1. Requirement 8.2

## User Story 9

_As a frontend developer, I want to design a user-friendly interface that allows users to input relevant data, so that the information can be collected accurately and efficiently._

**9.1** The interface should be intuitive and easy to navigate.

&emsp;**9.1.1** The interface must provide clear labels and placeholders for input fields to guide users through the data entry process.

**9.2** The interface should implement real-time validation to ensure that data is accurate and formatted correctly before submission.

## User Story 10

_As a frontend developer, I want to implement validation rules for user inputs, so that only valid and clean data is sent to the backend for processing._

1. Requirement 10.1
1. Requirement 10.1.1
1. Requirement 10.2

## User Story 11

_As a frontend developer, I want to be able to interface with the backend, so that I can access the data to display to the user._

1. Requirement 11.1
1. Requirement 11.1.1
1. Requirement 11.2
