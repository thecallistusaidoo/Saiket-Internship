# Task 4 – Basic REST API (Saiket Systems Internship)

## 📌 Description
This project is a basic REST API built using **Node.js** and **Express.js**.  
It demonstrates CRUD operations on a **User** entity and was developed as part of Task 4 of the Saiket Systems Full Stack Development Internship.

---

## 🚀 Features
- Create a new user
- Retrieve all users
- Retrieve a single user by ID
- Update user details
- Delete a user
- JSON request & response handling

---

## 🛠 Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman / Thunder Client (API testing)

---

## 📂 Project Structure

task-4-rest-api/
├── index.js
├── package.json
├── README.md
└── .gitignore


---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start the server
```bash
node index.js
```

### Server will run on:
```arduino
http://localhost:3000
```

## 📌 API Endpoints
### ➕ Create User

# POST /users
```js
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### 📥 Get All Users

# GET /users

### 📥 Get User by ID

#GET /users/:id

### ✏️ Update User

# PUT /users/:id

```js
{
  "age": 30
}
```

### 🗑 Delete User

# DELETE /users/:id

## 🧪 Testing

- All endpoints were tested using Postman / Thunder Client.

## 👤 Author

**Callistus Lawrence Aidoo**
Full Stack Development (Intern)