## Detailed Design: Mobile Check Deposit


1. User Interface (Front-end):

1.1. Deposit Screen:
    - Create a deposit screen containing input fields for the check amount and a dropdown menu for selecting the destination account.
    - Add buttons or icons to initiate the check image capture process for both the front and back of the check.

1.2. Camera Interface:
    - Implement a camera interface using platform-specific libraries (e.g., CameraX for Android, UIImagePickerController for iOS) to provide a consistent and optimized experience across devices.
    - Add visual guides, such as overlays or borders, to help users align the check within the camera frame.

1.3. Image Review Screen:
    - Create a screen that displays the captured check images and allows users to retake the images if needed.
    - Display the extracted check information (routing number, account number, and check number) for user verification.

1.4. Deposit Confirmation Screen:
    - Present the final deposit details, including the check amount, deposit account, and check images, for the user's confirmation.
    - Include a "Submit" button to finalize the deposit process.

2. Check Image Processing (Back-end):

2.1. Image Pre-processing:
    - Implement image pre-processing techniques to enhance the captured check images for better OCR results, such as resizing, grayscale conversion, noise reduction, and adaptive thresholding.

2.2. Optical Character Recognition (OCR):
    - Use an OCR library or service (e.g., Tesseract, Google Cloud Vision API) to extract relevant information from the check images, such as the routing number, account number, check number, and check amount.
    - Implement error-handling mechanisms to manage cases where OCR fails to extract data accurately or completely.

2.3. Data Validation and Correction:
    - Validate the extracted data to ensure it is accurate and complete, checking for common OCR errors, such as misinterpreted characters or incorrect check amounts.
    - In case of discrepancies, prompt users to review and manually correct the extracted information.

3. Deposit Submission and Processing:

3.1. Deposit Record Creation:
    - Create a deposit record in the database, associating it with the user's account and storing the check images, extracted data, and deposit status (e.g., pending, cleared, rejected).

3.2. Backend Deposit Processing:
    - Implement a module to communicate with the bank's core processing system or a third-party check clearing service, submitting the deposit information for processing and clearing.
    - Handle various processing outcomes, such as successful deposits, rejected deposits due to insufficient funds, or duplicate check deposits.

4. Notifications and Transaction History:

4.1. Deposit Status Notifications:
    - Based on the user's preferences, send deposit status updates through in-app notifications, push notifications, or email notifications.

4.2. Transaction History:
    - Update the user's transaction history to include the check deposit, displaying relevant information such as deposit date, check amount, check number, and deposit status.
    - Provide the ability to view check images and deposit details in the transaction history.

5. Compliance and Security:

5.1. Check Retention Policy:
    - Establish a check retention policy in compliance with banking regulations that defines the duration for storing check images in the system.

5.2. Check Destruction Policy:
    - Develop a check destruction policy to guide users on securely retaining and disposing of physical checks after completing the mobile deposit process.

5.3. Data Security:
    - Ensure that check images and extracted data are transmitted and stored securely, using encryption and other best practices to protect sensitive information.

