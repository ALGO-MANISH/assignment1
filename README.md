Here I have created a Node.js and Express.js based backend for a social media platform with functionalities like user authentication, discussions, comments, likes, and follows.

Features
User registration, login, and profile management
Create, update, delete, and list discussions
Comment on discussions, like discussions and comments
Follow/unfollow users
Search functionality for users and discussions
Tech Stack
Node.js
Express.js
MySQL (using Sequelize ORM)
JWT for authentication
Getting Started
Prerequisites
Node.js installed
MySQL database setup

Installation
Clone the repository:
git clone https://github.com/ALGO-MANISH/assignment1
cd social-media-backend

Install dependencies:
npm install

Create a .env file in the root directory and add the following environment variables:
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
JWT_SECRET=your_jwt_secret
PORT=3000



Initialize the database:
npx sequelize-cli db:migrate


Start the server:
npm start


API Endpoints
User
POST /users: Create a new user
POST /users/login: User login
GET /users: Get list of users
PUT /users/:id: Update user profile
DELETE /users/:id: Delete user
POST /users/:id/follow: Follow a user
Discussion
POST /discussions: Create a new discussion
GET /discussions: Get list of discussions
PUT /discussions/:id: Update a discussion
DELETE /discussions/:id: Delete a discussion
POST /discussions/:id/like: Like a discussion
POST /discussions/:id/comment: Comment on a discussion
Comment
PUT /comments/:id: Update a comment
DELETE /comments/:id: Delete a comment
POST /comments/:id/like: Like a comment
POST /comments/:id/reply: Reply to a comment
