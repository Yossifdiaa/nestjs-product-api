# NestJS API: Authentication and Product Management

This project is a backend API built with NestJS and MongoDB. It implements user authentication with JWT and role-based access control (Admin/User). The API supports CRUD operations for products, with specific access control for Admin and User roles.

---

## Features

- User registration and login with JWT-based authentication.
- Role-based access control (Admin/User) using Guards.
- CRUD operations for products:
  - Admin: Full access (create, retrieve, update, delete).
  - User: Limited access (create, retrieve, update).
- Validation Pipes for data validation.
- MongoDB integration using Mongoose.

---

## Technologies Used

- **NestJS**: Framework for building scalable server-side applications.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT**: For authentication and authorization.

---

## Setup and Installation

### Prerequisites
- **Node.js**: Install from [Node.js Official Website](https://nodejs.org/)
- **MongoDB**: Install and run MongoDB locally or use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Postman**: For testing the API endpoints.

---

### Steps to Run Locally

1. **Clone the Repository**

   git clone https://github.com/yossifdiaa/nestjs-product-api.git
   cd nestjs-product-api


2. **Install Dependencies**

  npm install

3. **Set Environment Variable**

  Create a .env file in the root directory like .env.example file
 

3. **Run the Application**

  npm run start:dev


### API Endpoints


1. **authentication**

- POST "/auth/register": Register a new user.
-POST "/auth/login": Log in to receive a JWT token.


2. **Product Management**


-POST /products: Create a product (Admin/User).
-GET /products: Retrieve all products (Admin/User).
-GET /products/:id: Retrieve a product by ID (Admin/User).
-PATCH /products/:id: Update a product (Admin/User).
-DELETE /products/:id: Delete a product (Admin only).




### Notes

-The application includes error handling for invalid data and unauthorized access.

-Ensure MongoDB is running before starting the application.

-Use the JWT token in the Authorization header for protected routes.



## Postman Collection

To test the API endpoints, you can use the provided Postman collection:

1. Download the Postman collection from the [docs/postman-collection.json](./docs/API_Testing_Collection.postman_collection.json) file.
2. Open Postman and go to **File > Import**.
3. Select the downloaded `API_Testing_Collection.postman_collection.json` file.
4. The collection will be imported, and you can start testing the endpoints.


## Before testing endpoints that require authorization:

1. Use the /auth/login endpoint to log in with your credentials.
2. Copy the JWT token provided in the login response.
3. In Postman, go to the "Authorization" tab for the specific request.
4. Select Bearer Token and paste the JWT token in the provided field.



