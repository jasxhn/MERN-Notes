# 📝 MERN Notes App

A full-stack Notes application built using the MERN stack (**MongoDB, Express.js, React, Node.js**) that allows users to create, manage, and organize notes efficiently.

---

## 🌐 Live Demo

👉 [https://mern-notesapp-ym8r.onrender.com/](https://mern-notesapp-ym8r.onrender.com/)

## 📦 Repository

👉 [https://github.com/jasxhn/MERN-Notes](https://github.com/jasxhn/MERN-Notes)

---

## ✨ Features

* 📝 Create new notes
* 📖 View all notes
* ✏️ Update/edit notes
* 🗑️ Delete notes
* 🔐 User authentication (JWT + bcrypt)
* ⚡ Fast and responsive UI
* 🌍 Fully deployed on Render

---

## 🔐 Authentication

This app uses **JWT (JSON Web Tokens)** for authentication and **bcrypt** for secure password hashing.

* Users can register and log in securely
* Passwords are hashed before storing in the database
* JWT is used to authenticate protected routes

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS / DaisyUI
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### Deployment

* Render (Frontend + Backend)

---

## 📁 Project Structure

```
MERN-Notes/
│
├── client/        # Frontend (React)
├── server/        # Backend (Express + Node)
└── README.md
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/jasxhn/MERN-Notes.git
cd MERN-Notes
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/notes     | Get all notes |
| POST   | /api/notes     | Create a note |
| PUT    | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

---

## 🚀 Deployment

The app is deployed on **Render**:

* Frontend + Backend connected via environment variables
* Uses dynamic API base URL (no localhost issues in production)
* Axios configured for production-safe requests

---

## 🧠 Key Learnings

* Handling frontend ↔ backend communication
* Fixing production API issues (localhost bug)
* Using environment variables properly
* Implementing JWT authentication & password hashing
* Deploying full-stack apps on Render
* Debugging real-world errors

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](./assets/screenshots/HomePage.png)

### 📝 Create Note Page

![Create Note Page](./assets/screenshots/CreateNotePage.png)

### ✅ Note Created

![Note Created](./assets/screenshots/NoteCreated.png)

### 🗑️ Delete Note

![Delete Note](./assets/screenshots/DeleteNote.png)

---

## 🤝 Contributing

Feel free to fork this repo and improve it!

```bash
git fork
git clone your-fork
```

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Jashan Saini**

---

## ⭐ Show some love

If you like this project, give it a ⭐ on GitHub!
