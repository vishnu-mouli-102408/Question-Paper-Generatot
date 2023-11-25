# Question Paper Generator

## Overview

This project is a Question Paper Generator built using Node.js, JavaScript, MongoDB (local database), and Mongoose. The application allows you to manage a Question Store with questions having attributes such as question, subject, topic, difficulty, and marks. Additionally, the system provides CRUD APIs for storing and retrieving questions and includes a `/generate` endpoint API for generating question papers based on specified requirements.

## Project Structure

The project is structured as follows:

- `src`: Contains the source code of the Node.js application.
  - `models`: MongoDB schema models using Mongoose.
  - `routes`: CRUD APIs and question paper generation logic.
  - `utils`: Utility functions and helper methods.
  - `repository`: Communicate with Database.
  - `services`: Business Logic.
  - `controller`: First level of Layer.
  - `config`: Setup Configuration data.
- `config`: Configuration files for the application.
- `index.js`: Main entry point of the application.

## Question Attributes

A question in the Question Store has the following attributes:

- Question
- Subject
- Topic
- Difficulty
- Marks

Example:
```json
{
  "question": "What is the speed of light",
  "subject": "Physics",
  "topic": "Waves",
  "difficulty": "Easy",
  "marks": 5
}
```

## Generating Question Papers

The Question Paper Generator uses the distribution of marks based on difficulty to create question papers. The requirements for a question paper are as follows:

- **Total Marks:** 100
- **Difficulty Distribution:**
  - 20% Easy
  - 50% Medium
  - 30% Hard


## Setting Up the Project Locally

Follow these steps to set up the project on your local environment:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vishnu-mouli-102408/Question-Paper-Generatot
   ```
2. **Install Dependencies:**
  ```bash
   cd question-paper-generator
   npm install
  ```
3. **Configure MongoDB**
   Set up a local MongoDB database and update the connection string in the ```config/database.js``` file.
4. **Run the Application**
   ```bash
   npm start
   ```
# API Endpoints:

- **CRUD APIs for managing questions:** `/api/v1/questions`
- **Question paper generation API:** `/api/v1/generate`

# Usage:

- Use tools like Postman or CURL to interact with the APIs.
- Create, retrieve, update, and delete questions using the CRUD APIs.
- Generate a question paper using the `/api/v1/generate` endpoint.

# Note:

- Ensure that MongoDB is running locally.
- Adjust the MongoDB connection string if necessary in the `config/databaseConfig.js` file.
- Add `.env` file and add MONGO_URL as your local MongoDB String. eg: `"mongodb://127.0.0.1:27017/Your_DB_Name"`

# Dependencies:

- Node.js
- Express.js
- Mongoose
- Other dependencies listed in `package.json`
   
