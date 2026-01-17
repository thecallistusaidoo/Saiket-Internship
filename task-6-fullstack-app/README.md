# Task 6 – Frontend Integration with REST API

## 📌 Overview
This task focuses on integrating a frontend application with a REST API built using **Node.js, Express, and MongoDB**. The project demonstrates full **CRUD functionality** (Create, Read, Update, Delete) by allowing users to manage data through a clean, interactive user interface.

The objective of this task is to showcase real-world frontend–backend communication and dynamic UI updates using **vanilla JavaScript**.

---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- Vanilla JavaScript  
- Node.js  
- Express.js  
- MongoDB  
- Postman (API testing)

---

## ✨ Features
- Fetch users from a REST API
- Add new users with form validation
- Edit user details inline
- Delete users
- Dynamic DOM updates without page reload
- Clean, card-based UI
- Error handling for failed requests
- Responsive and user-friendly layout

---

## 📂 Project Structure
task-6-frontend-integration/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## 🔗 API Endpoints Used
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/task5/users` | Fetch all users |
| POST | `/api/task5/users` | Create a new user |
| PUT | `/api/task5/users/:id` | Update an existing user |
| DELETE | `/api/task5/users/:id` | Delete a user |

---

## ▶️ How to Run the Project

### 1️⃣ Start the Backend Server
Ensure the Task 5 backend server is running and connected to MongoDB:

```bash
node server.js
Database connection:

mongodb://127.0.0.1:27017/saiket_task5_db
```

### 2️⃣ Run the Frontend

- Open index.html in your browser
(or use Live Server for better development experience).

---

## 🧪 Testing
- API endpoints tested using Postman

- CRUD operations tested directly from the frontend UI

- Database verified using MongoDB Compass

---

## 📚 Key Learning Outcomes
- Consuming REST APIs from the frontend

- Handling asynchronous operations using fetch

- Managing dynamic UI state with JavaScript

- Implementing CRUD functionality in a real-world workflow

- Improving UI/UX for usability and clarity

---

## ✅ Task Status

✔ Completed
✔ Fully functional frontend–backend integration
✔ Meets internship requirements

---

## 👤 Author

**Callistus Lawrence Aidoo**
Full Stack Development (Intern)