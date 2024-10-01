# Minimum Viable Specification Draft

## Summary

The CHIMERA project is a web portal for WSU students, faculty, and staff to report supernatural disturbances on campus. 

## Why we should do it

We want to determine the nature of the supernatural occurences on Wright State's campus.

## Assumptions

1. Students, faculty, and staff will be willing to report their experiences with these disturbances accurately and in detail.
2. The disturbances reported by students can be analyzed and compared against known supernatural entity data to identify patterns or match them to existing entities.
3. The available database of known supernatural entities is at least comprehensive enough to allow for meaningful comparisons with new reports.
4. All team members will be available to contribute according to our software development plan.
5. The team possesses the necessary skills and knowledge required to complete the project using the technologies outlined.

## Goal

The overarching goal is to aid in understanding and possibly resolving the unexplained phenomena being experienced on campus.

We've set out to create a system that can collect reports of supernatural disturbances, analyze them by comparing them to known supernatural entity data, and help identify or classify any potential unknown supernatural entities based on the patterns observed in the reported disturbances.

## Outputs

1. Entity Identification or Classification Report
    * Description: After analyzing a report, the system outputs a report that includes:
        * The possible supernatural entity/entities responsible for the disturbance.
        * A confidence level or likelihood rating based on how closely the report matches known entities.
        * Relevant information about the identified entity (e.g., typical behaviors, weaknesses, historical sightings).
2. Disturbance Report Summary
    * Description: A summary of all disturbances submitted by students, faculty, or staff. This could include:
        * Date, time, and location of each reported disturbance.
        * Key details from the user submission, such as description of the event.
        * The status of the report (e.g., matched to a known entity, flagged for further review).
3. Entity Comparison Dashboard
    * Description: A visual or tabular output that shows a comparison of the new disturbance report against the known supernatural entities in the database, highlighting potential matches. This dashboard could also allow users to:
        * View the list of matched entities, ranked by relevance.
        * See common characteristics shared between the new report and known entities.
        * Explore entity profiles linked to the disturbances.

## Benefit

1. Offering insight into phenomena that would otherwise remain mysterious.
2. By compiling reports and known entity data in one place, C.H.I.M.E.R.A. serves as a centralized repository for tracking and analyzing supernatural activity. Having all this information in one system makes it easier to identify patterns, study trends, and reference past incidents, reducing the need to manually collect or search for information.
3. Students, faculty, and staff can actively participate in the reporting process, which fosters a sense of involvement in solving the campus's unexplained disturbances.
4. The system's ability to analyze patterns in reports and match them with known supernatural entities could lead to the early detection of recurring phenomena or predict future disturbances.

## Acceptance Criteria

1. User Report Submission   
    Users can submit reports of disturbances through a clearly labeled form. Submitted reports are stored in the database and can be retrieved by authorized personnel.
2. Admin/Moderator Portal
    Admins can log in securely with unique credentials and can edit and delete user reports.
3. Comparative Analysis Tools
    The system can analyze submitted reports against known entity data within a reasonable amount of time. The analysis tool accurately matches user reports with known entities most of the time when using valid data. Users are provided with feedback on the results of the analysis, including any matches found or suggestions for further investigation.
4. Database Functionality
    The database must store all user reports and entity information reliably, with no data loss. Queries for retrieving user reports or entity data should return results within a few seconds.
5. Front-End User Interface
    The UI must adhere to Material UI design guidelines for consistency and usability. Users should be able to navigate the site easily, with clear menus and options. All text must be readable, with a minimum font size defined, and color contrast ratios meeting accessibility standards.
6. Testing and Quality Assurance
    All tests pass without critical errors before deployment.