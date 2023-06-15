# Ngoane Digital Health Platform

Ngoane Digital Health Platform is a web application designed to support individuals living with chronic diseases. It provides various features to help users manage their health conditions, track symptoms, record medical history, and connect with healthcare professionals.

## Features

- Symptom Tracker: Users can track their symptoms, record relevant information such as date, time, possible triggers, and how they feel over time.

- Medical History: Users can maintain a comprehensive record of their medical history, including diagnoses, medications, treatments, and test results.

- Appointment Management: Users can schedule appointments with healthcare professionals, receive reminders, and access appointment details.

- Health Insights: The platform provides valuable insights into user data, such as symptom patterns, medication adherence, and health trends.

- Connect with Healthcare Professionals: Users can communicate with their healthcare providers through secure messaging and request prescription refills or ask questions.

## Technologies Used

- Next js: A React framework for building production level fullstack applications.
- Material-UI: A popular React UI framework that provides pre-designed components and styling options.
- Day.js: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- Axios: A promise-based HTTP client for making API requests from the client-side.
- Express.js: A minimal and flexible Node.js web application framework used for the server-side.
- MongoDB: A NoSQL database used for storing user data and medical records.
- Authentication and Authorization: Implement user authentication and authorization using libraries like Next-Auth and JSON Web Tokens (JWT).
- Secure Messaging: Utilize encryption and security best practices for implementing secure messaging functionality.

## Getting Started

To get started with the Ngoane Digital Health Platform, follow these steps:

1. Clone the repository:

git clone https://github.com/ngoane/company-site.git


2. Install the dependencies:

npm install


3. Set up the server:

   - Make sure you have MongoDB installed and running on your system.
   - Create a `.env` file in the project root directory and provide the necessary environment variables (e.g., database connection URL, secret keys).
   - Start the server:
     ```
     npm run server
     ```

4. Set up the client:

   - Open a new terminal and navigate to the project root directory (`company-site`).
   - Install the client dependencies:
     ```
     npm install
     ```
   - Start the client:
     ```
     npm start
     ```

5. Access the application:

   The application will be accessible at `http://localhost:3000` in your web browser.

## API Endpoints

The server provides various API endpoints for handling user-related actions, medical records, appointments, messaging, and more. 

## Contributors

- Dr. Ehoneah Obed
- Lawrence Ogereka
- Maxwell D. Dorliea


## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please create an issue or submit a pull request.

## License

This project is closed source and all rights are reserved by the project contributors.