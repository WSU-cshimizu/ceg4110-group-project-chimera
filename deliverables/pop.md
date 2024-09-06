# Project Overview Proposal

## Project C.H.I.M.E.R.A - Cryptic Haunting Investigation and Mysterious Entity Research Application

* Objective
  * WSU students, faculty, and staff have reported strange disturbances across the campus and surrounding areas. Campus police, maintnence, and custodial staff’s investigations have all turned up inconclusive information regarding these disturbances. We believe these disturbances are of the supernatural nature. The goal of C.H.I.M.E.R.A. is to compile all known supernatural entity data and compare reports from students to help determine unknown supernatural entities.
* Project Components
  * Administrator/Moderator Portal - An administrative portal to allow mods/admins to manually adjust reports and entity data.
  * Back End - A back end to handle back end logic, route data pulled from databases to comparitive tools, and provide data to the front end to allow users to search across records.
  * Comparative Analysis Tools - The tools that will compare user reports against known entity data, identify patterns of new reports, and comparing user submitted reports with historical data.
  * Database - A database that contains all known information regarding the supernatural entities and User inputted reports.
  * Front End - A front end to view the known entity information, the user inputted reports, and to submit new user report to be compiled and compared against.
* Predicted Architecture
    * Admin/moderator portal that's part of the front-end. It will interact with the databases to remove, add, or edit user inputted reports and entity entries through back end APIs.
    * Back End - Facilitates communication between Front End and Databases.
    * Comparative Analysis Tools - Resides in the back end, can be used to compare report database entries to entity database entries.
    * Database - Holds all user reports and entity descriptions. Is accessible through APIs.
    * Front End - Retrieves and sends data via APIs on the back end.
* Languages and Frameworks    
    * Front End - 
      - React JS for development and Node JS for developing environment for a dynamic and responsive UI.
      - Node.js for deployment environment because it allows server-side rendering and API development.
      - CSS Framework - Material UI as a CSS framework because it offers a comprehensive suite of free UI tools to help us ship new features faster.
    * Node JS libraries - 
      - NPM CLIs beacuse It helps with installing various packages and resolving their various dependencies.
    * Databases -
      - PostgreSQL for ease of use, reliability and ability to handle complex queries
    * Comparative Analysis Tools - 
      - Python for data analysis, machine learning, and data visualization because of the available tools and libraries.
* Predicted life cycle/methodology
    * Agile Scrum
    * Cycle time - 2-week sprints
    * Standups - Tuesdays and Thursdays
    * Key Activities - Sprint planning, standups, retrospectives
