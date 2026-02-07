

# 🏋️ Workout API

A RESTful API built with **Node.js** and **Express.js** that allows users to create, manage, schedule, and track workout plans. The API supports authentication, workout management, scheduling, and reporting of workout progress.

---

## 📌 Features

* User registration and login authentication
* Create workout plans with multiple exercises
* Update workout details and add comments
* Delete workout plans
* Schedule workouts for specific dates and times
* List active or pending workouts sorted by date
* Generate reports on past workouts and progress

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT) Authentication
* Postman (API testing)

---

## 📁 Project Structure

```
workout-api/
│
├── controllers/
│   ├── auth.js
│   └── workout.js
│
├── middleware/
│   └── authentication.js
│
├── models/
│   ├── User.js
│   └── Workout.js
│
├── routes/
│   ├── auth.js
│   └── workout.js
│
├── config/
│   └── db.js
│
├── app.js
└── app.js
```

---

## ⚙️ Installation

1. Clone the repository

```
git clone <your-repository-url>
```

2. Navigate into the project folder

```
cd workout-api
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. Start the app

```
npm start
```

---

## 🔐 Authentication

This API uses **JWT authentication**.

After login, include the token in request headers:

```
Authorization: Bearer <token>
```

---

## 📮 API Endpoints Overview

### Authentication

* `POST /api/auth/register` — Register user
* `POST /api/auth/login` — Login user

### Workouts

* `POST /api/workouts` — Create workout
* `GET /api/workouts` — List workouts
* `GET /api/workouts/:id` — Get single workout
* `PATCH /api/workouts/:id` — Update workout
* `DELETE /api/workouts/:id` — Delete workout
* `GET /api/workouts/report` — Generate workout report

---

## 📊 Workout Structure

A workout contains:

* Workout name
* Scheduled date and time
* Exercises

  * Exercise name
  * Sets
  * Repetitions
  * Weight
* Comments
* Status (active, pending, completed)

---

## 🧪 Testing

API endpoints can be tested using:

* Postman
* Thunder Client
* Insomnia

---

## 🚀 Future Improvements

* Exercise library
* Progress charts
* Pagination and filtering
* User profile management
* Notifications for scheduled workouts

---

## 👨‍💻 Author

**Salami Tunde Onileola**
Node.js Developer | Crop Protection Student
Federal University of Agriculture, Abeokuta

---# Workout-API
