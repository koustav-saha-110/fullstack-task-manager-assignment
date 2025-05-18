# Task Management App

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

## Features

- User registration and login
- Create, update, and delete tasks
- Assign due dates and priorities
- Mark tasks as complete/incomplete
- Filter and search tasks
- Responsive UI

## Running Locally

1. **Clone the repository:**
    ```bash
    git clone https://github.com/koustav-saha-110/fullstack-task-manager-assignment.git
    cd fullstack-task-manager-assignment
    ```

2. **Install dependencies:**
    ```bash
    cd server
    npm install
    cd ..
    cd client
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the root and add necessary variables (``PORT`, `CLIENT_URL`, `MONGO_URI`, `JWT_SECRET`, `SALT_ROUNDS`).

4. **Start the backend server:**
    ```bash
    cd server
    npm run dev
    ```

5. **Start the frontend:**
    ```bash
    cd client
    npm start
    ```

6. **Access the app:**
    - Open [http://localhost:5173](http://localhost:3000) in your browser.
