# Project Overview Proposal

## Project C.H.I.M.E.R.A - Cryptic Haunting Investigation and Mysterious Entity Research Application

* Objective
  * WSU students, faculty, and staff have reported strange disturbances across the campus and surrounding areas. Campus police, maintnence, and custodial staff’s investigations have all turned up inconclusive information regarding these disturbances. We believe these disturbances are of the supernatural nature. The goal of C.H.I.M.E.R.A. is to compile all known supernatural entity data and compare reports from students to help determine unknown supernatural entities.
* Project Components
  * Administrator/Moderator Portal - An administrative portal built in unison with the front end to allow moderators/admins to manually adjust reports and entity data.
  * Back End - A back end to help route data pulled from databases to place into comparitive tools as well provide data to the front end to allow users to search across records.
  * Comparative Analysis Tools - The tools that will compare user reports against known entity data, identify patterns of new reports, and comparing user submitted reports with historical data.
  * Databases - A database that contains all known information regarding the supernatural entities and User inputted reports.
  * Front End - A front end to view the known entity information, the user inputted reports, and to submit new user report to be compiled and compared against.
* Predicted Architecture
    * Prompt: "We think, based on not touching it yet, we'll do..." - TBD
    * Administrator/Moderator Portal - Part of the front end but only accessible by admins. Interacts with the databases to remove, add, or edit user inputted reports and entity entries through tools in the back end.
    * Back End - Facilitates communication between Front End and Databases.
    * Comparative Analysis Tools - In the back end, can be used to compare entries in the report database to the entries in the entity database.
    * Databases - Databases that hold all user reports and entity descriptions. Is accessible through tools in the back end.
    * Front End - Retrieves and send data to or from the databases through the back end. 
* Languages and Frameworks    
    * Front End(React JS) - React JS for development and Node JS for developing environment
    * CSS Framework - Material UI as a CSS framework because it offers a comprehensive suite of free UI tools to help us ship new     features faster.
    * Node JS libraries - NPM CLIs beacuse It helps with installing various packages and resolving their various dependencies.
    * Include a response to: "why are you picking the tech stack that you are?" - TBD
* Predicted life cycle/methodology
    * Sprint/Scrum - TBD
