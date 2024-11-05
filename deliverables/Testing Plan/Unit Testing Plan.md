# Functional Unit Testing Plan

## User Story
As a tester, I want to verify that the C.H.I.M.E.R.A. application is intuitive and user-friendly, ensuring that all validations are properly enforced for effective error handling and smooth user interactions. The application compiles supernatural entity data and compares it with reports from students to help identify unknown supernatural entities affecting the WSU campus.

## Objective
The primary objective of this testing plan is to ensure the application meets the following criteria:

- User interface is intuitive and accessible for all users, including students, faculty, and staff.
- All input fields, forms, and data submissions are validated to prevent erroneous or incomplete data.
- Supernatural entity data can be accurately compared with student reports.
- Errors and edge cases (e.g., invalid data, incomplete reports) are handled gracefully, with clear feedback provided to the user.
- The application can handle a diverse range of reports and data entries, ensuring that no anomalies in data entry lead to crashes or bugs.

## Coverage

# Form Validations:
- Ensure all required fields (e.g., report details, user information) are validated before submission.
- Validate input data types (e.g., correct format for dates, valid email addresses).
- Check that meaningful error messages appear for missing or incorrect data entries.

# Report Submission and Entity Comparison:
- Test the accuracy and efficiency of the algorithm that matches student reports with supernatural entity data.
- Ensure that new reports are properly stored and can be retrieved or updated.

# Error Handling:
- Test how the application behaves when provided with incomplete, incorrect, or conflicting data.
- Validate that error messages are clear and guide users towards corrective actions.

# User Interface (UI):
- Ensure the interface is responsive and intuitive for users from different roles (students, faculty, staff).
- Test the navigation flow for ease of use and clarity (e.g., submitting reports, accessing comparison data).

# Security and Access Control:
- Verify that only authorized personnel (faculty, staff) can access certain features like editing supernatural entity data.
- Ensure sensitive data, like student identities, is protected and cannot be exposed without proper permissions.


## Software Library


## Conclusion
