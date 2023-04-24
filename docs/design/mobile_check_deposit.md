# Design: Mobile Check Deposit

1. Check Deposit Interface:
    - Create a user interface for depositing checks, including fields for entering the check amount and selecting the deposit account.
    - Implement a camera interface that allows users to capture images of the front and back of the check within the application. Ensure the camera interface is compatible with different devices and platforms.

2. Check Image Validation and Processing:
    - Validate the captured check images to ensure they are clear and meet the application's requirements, such as proper lighting, focus, and alignment.
    - Extract the necessary information from the check images using Optical Character Recognition (OCR) technology. This includes the routing number, account number, check number, and check amount. Validate the extracted data to ensure it is accurate and complete.

3. Deposit Verification and Submission:
    - Allow users to review the extracted check information and manually correct any inaccuracies.
    - Prompt the user to confirm the deposit details, including the check amount, deposit account, and check images.
    - Create a deposit record in the system, linking it to the user's account and storing the check images and extracted data.
    - Submit the deposit information to the backend system for processing and clearing. This may involve communication with the bank's core processing system or a third-party check clearing service.

4. Deposit Status and Notifications:
    - Update the deposit status in the user's account based on the backend processing results, such as pending, cleared, or rejected.
    - Notify the user of the deposit status, either through in-app notifications or by email, depending on the user's preferences.
    - Provide a transaction history interface where users can view the details and status of their check deposits.

5. Check Retention and Destruction Policy:
    - Implement a check retention policy that specifies how long check images should be stored in the system, ensuring compliance with banking regulations.
    - Implement a check destruction policy that guides users on how long to retain physical checks after depositing them through the mobile app, and how to securely destroy the checks.

