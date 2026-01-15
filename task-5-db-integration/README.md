# Task 5 – Database Integration (MongoDB)

## 📌 Overview
This task demonstrates database integration using **MongoDB** with a **Node.js + Express** REST API.  
The API performs full **CRUD operations** on a user entity and stores data persistently in MongoDB.

This task focuses on:
- Database connection
- Schema design
- API and database interaction

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Thunder Client / Postman

---

## 📂 Database Details
- **Database name:** `saiket_task5_db`
- **Collection name:** `task5_db`

---

## 📁 Project Structure

task-5-db-integration/
│
├── models/
│ └── User.js
│
├── routes/
│ └── userRoutes.js
│
├── db.js
├── server.js
└── README.md

---

## 🔗 API Endpoints

### ➕ Create User
**POST** `/api/task5/users`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### 📄 Get All Users
**GET** `/api/task5/users`

### 🔍 Get User by ID
**GET**`/api/task5/users/:id`

### ✏️ Update User
**PUT** `/api/task5/users/:`id`

``` json
{
  "age": 30
}
```

### 🗑 Delete User
**DELETE** `/api/task5/users/:id`

## ▶️ How to Run the Project

- Install dependencies:

```bash
npm install
```

-Start MongoDB locally
-Run the server:

```bash
node server.js
```

Server runs on:

```arduino

http://localhost:3000
```

# ✅ Learning Outcomes
- Connected an Express server to MongoDB

- Designed and used Mongoose schemas

- Implemented full CRUD functionality

- Tested API endpoints using Postman/Thunder Client

# 📌 Status
✔ Task 5 completed successfully

---

## 👤 Author

**Callistus Lawrence Aidoo**
Full Stack Development (Intern)