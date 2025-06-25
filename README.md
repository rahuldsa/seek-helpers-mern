To-Do List Application – MERN/Nest.js Intern Assessment
📋 Project Overview

This is a simple To-Do List web application built with:

Backend: Node.js + Express.js (in-memory storage)
Frontend: Next.js (React)

The app allows users to:
Add tasks
View all tasks
Mark tasks as completed (toggle)
Delete tasks

📂 Folder Structure
seek-helpers/
│
├── backend/
│   └── server.js
│
└── frontend/
    ├── package.json
    ├── pages/
    │   └── index.js
    └── components/
        ├── TaskForm.js
        └── TaskList.js

🚀 Setup Instructions
1. Backend Setup
Navigate to the backend folder:
   cd backend

Install dependencies:
   npm install express cors

Run the backend server:
   node server.js

Backend will run on:
   http://localhost:5000

2. Frontend Setup
Open a new terminal and navigate to the frontend folder:
   cd frontend

Install dependencies:
   npm install

Run the frontend app:
   npm run dev

Frontend will run on:
   http://localhost:3000

✅ Features Implemented
Add new tasks
View all tasks
Mark tasks as completed (toggle)
Delete tasks
Basic validation (task title required)
Strike-through effect for completed tasks
Basic responsive design

🛠️ Tech Stack
Backend: Node.js, Express.js, CORS
Frontend: Next.js, React.js

💻 How to Test
Open the app in your browser at http://localhost:3000
Add, complete, and delete tasks to test the functionality
Refresh the page to ensure data persistence (within the in-memory session)

📱 Optional Improvements
Add local storage or a backend database for persistent data
Improve CSS for better mobile responsiveness
Add loading states and user feedback
