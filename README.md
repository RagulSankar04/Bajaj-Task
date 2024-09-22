# Bajaj Finserv

This project is a Node.js API built for Bajaj Finserv. It provides endpoints for processing data and retrieving operation codes.


## Technologies Used

### Frontend

![NextJS](https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) 

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## Live Demo

Experience the application live [https://bajajfinserv-task.vercel.app/](https://bajajfinserv-task.vercel.app/)

Here's the README.md in the correct format:



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```sh
   git clone 
   ```

2. **Navigate to the project directory**

   ```sh
   cd bajajfinserv
   ```

3. **Install dependencies**
   - **Backend**
     ```sh
     cd backend
     npm install
     ```
   - **Frontend**
     ```sh
     cd frontend
     npm install
     ```

## Environment Variables

### Backend

- `PORT`: The port on which the server will run (default: 5000)
- `ORIGIN_1`: Allowed origin for CORS
- `ORIGIN_2`: Another allowed origin for CORS



### Frontend

- `NEXT_PUBLIC_SERVER_URL` : Server Hosted Url

## Setup

To run this project, create a `.env` file in the root directory for the backend and another `.env` file in the root directory for the frontend with the necessary environment variables listed above.

4. **Run the application**
   - **Backend**
     ```sh
     cd backend
     npm start
     ```
   - **Frontend**
     ```sh
     cd frontend
     npm start
     ```

## Usage

The server will start on the port specified in your environment variables, or on port 5000 by default.

## API Endpoints

### 1. Process Data

- **URL:** `/bfhl`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "data": [array of strings and numbers]
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "is_success": true,
      "user_id": "Ragulsankar04",
      "email": "rs7342@srmist.edu.in",
      "roll_number": "RA2111003020576",
      "numbers": [array of numbers],
      "alphabets": [array of alphabets],
      "highest_alphabet": [highest alphabet]
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ "is_success": false, "error": "Invalid input format" }`
  
  OR
  
  - **Code:** 500
  - **Content:** `{ "is_success": false, error: "Internal server error" }`

### 2. Get Operation Code

- **URL:** `/bfhl`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "operation_code": 1 }`




Once the application is up and running, open your browser and navigate to:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Project Structure

```plaintext
bento-clone/
├── backend/
│   ├── controllers/
│   ├── routes/
│   └── app.js
├── frontend/
│   ├── public/
│   ├── app/
│   │   ├── page.js/
│   │   └── layout.js
└── README.md
```
