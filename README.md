# 🏠 House Price Prediction App

This project is a **Dockerized web application** for predicting house prices using a **simple linear regression model**. It consists of a **React frontend**, a **Node.js/Express backend**, and a **Python/Flask model service**.

## 🚀 Features

- **Frontend**: User-friendly interface to input area and bedrooms.
- **Backend**: Handles requests and communicates with the model service.
- **Model Service**: Predicts house prices using a trained linear regression model.
- **Dockerized**: Easy to set up and run using Docker.

---

## 📌 Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) and [Python 3.x](https://www.python.org/downloads/) (for local setup)

---

## ⚙️ Setup Instructions

### 1️⃣ Generate the Model

Navigate to the backend directory:

```sh
cd backend
```

Install Node.js dependencies:

```sh
npm install
```

Train the model:

```sh
python3 train_model.py
```

### 2️⃣ Install Frontend Dependencies

Navigate to the frontend directory:

```sh
cd frontend
```

Install Node.js dependencies:

```sh
npm install
```

### 3️⃣ Run the Application

Navigate to the root directory:

```sh
cd ..
```

Build and run the Docker containers:

```sh
docker-compose up --build
```

---

## 🌍 Access the Application

- **Frontend**: Open your browser and go to 👉 [http://localhost:3000](http://localhost:3000)
- **Backend**: Accessible at 👉 [http://localhost:5001](http://localhost:5001)
- **Model Service**: Accessible at 👉 [http://localhost:5002](http://localhost:5002)

---

## 📂 Project Structure

```bash
ml-docker-linear_regression-app/
├── backend/               # Backend service (Node.js/Express)
├── frontend/              # Frontend service (React)
├── model/                 # Model service (Python/Flask)
└── docker-compose.yml     # Docker Compose configuration
```

---

## 🛠 Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Model**: Python, Flask, Scikit-learn, Joblib
- **Containerization**: Docker, Docker Compose

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

### 🎉 Enjoy predicting house prices! 🏠✨
