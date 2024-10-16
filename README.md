##Bike Rental Management System
##A basic Bike Rental Management System built with NestJS for the backend and ReactJS for the frontend. This project allows users to rent and return bikes with a simple and user-friendly interface.

##Features
#Bike Management: View all available bikes.
#Bike Rentals: Rent and return bikes through the user interface.
#Basic API: RESTful API with endpoints to manage bikes and rentals.
##Tech Stack
#Backend: NestJS, MongoDB, Mongoose
#Frontend: ReactJS, Axios
#Database: MongoDB
##Prerequisites
#Node.js (v14+)
#MongoDB (local or cloud)
#Installation and Setup
#1. Backend Setup
Navigate to the backend folder:
cd backend
npm install
Configure the .env file with MongoDB connection string:
MONGO_URI=mongodb://localhost:27017/bike-rental
PORT=3000
Start the backend:
npm run start
The backend API will be available at http://localhost:3000.

2. Frontend Setup
Navigate to the frontend folder:
cd frontend
npm install
REACT_APP_API_URL=http://localhost:3000
Start the frontend:
npm start
The frontend will be available at http://localhost:3000.

##Usage
#For Users: View available bikes, rent, and return bikes.
#For Admins: Manage bike rentals and view bike statuses.
#API Endpoints
#Bikes: /bikes (GET, POST, PUT, DELETE)
Rentals: /rentals/rent, /rentals/return
