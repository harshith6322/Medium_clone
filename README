# Medium Blog Post Clone

## Overview

This project is a clone of Medium's blog post system, built with a modern tech stack that includes React.js, Tailwind CSS, and TypeScript for the frontend, and Hono.js for the backend. The system is designed for deployment on a serverless architecture using Vercel and Cloudflare Workers.

## Features

### Frontend:

- **React.js**: Dynamic and responsive user interface.
- **Tailwind CSS**: Modern, utility-first CSS framework.
- **Axios**: Streamlined API communication.
- **Deployment**: Hosted on **Vercel** for fast and reliable service.

### Backend:

- **Hono.js**: Lightweight framework ideal for serverless environments.
- **JWT**: Secure authentication and authorization.
- **TypeScript**: Type safety and enhanced developer experience.
- **Deployment**: Hosted on **Cloudflare Workers** for a serverless backend.

### Database:

- **PostgreSQL**: Relational database for storing blog posts and user data.
- **Prisma ORM**: Efficient database queries with type safety.
- **Connection Pooling**: Optimized database connections for performance.

## Installation

### Prerequisites

- Node.js
- Yarn or npm
- PostgreSQL database

### Clone the Repository

```bash
git clone https://github.com/your-username/medium-blog-clone.git
cd medium-blog-clone
```

### Install Dependencies

```bash
# For the frontend
cd frontend
yarn install # or npm install

# For the backend
cd backend
yarn install # or npm install
```

### Environment Variables

Create a `.env` file in both the `frontend` and `backend` directories and configure the necessary environment variables such as API URLs, database credentials, JWT secret keys, etc.

### Database Setup

Ensure PostgreSQL is installed and running. Set up your database and run migrations using Prisma:

```bash
npx prisma migrate dev
```

### Running the Project

```bash
# Start the frontend
cd frontend
yarn start # or npm start

# Start the backend
cd backend
yarn dev # or npm run dev
```

## Deployment

### Frontend

Deploy the frontend on **Vercel** by connecting your repository and setting up the necessary environment variables in the Vercel dashboard.

### Backend

Deploy the backend on **Cloudflare Workers** by following their documentation and configuring the necessary environment variables.

## API Routes

### Base URL

All routes are prefixed with `/api/v1`.

### Authentication Middleware

- **Route:** `/blog/*`
- **Method:** `use`
- **Description:** Protects the `/blog` routes by verifying the JWT token.
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  - 401 Unauthorized: If the token is invalid or missing.
  - 200 OK: If the token is valid, the request proceeds.

### 1. Sign Up

- **Route:** `/signup`
- **Method:** `POST`
- **Description:** Create a new user account.
- **Request Body:**
  - `email: user@example.com`
  - `password: password123`
  - `name: John Doe`
- **Response:**
  - 200 OK: Account successfully created with a JWT token.
  - 400 Bad Request: Invalid input data.
  - 500 Internal Server Error: If something went wrong.

### 2. Sign In

- **Route:** `/signin`
- **Method:** `POST`
- **Description:** Authenticate a user and return a JWT token.
- **Request Body:**
  - `email: user@example.com`
  - `password: password123`
- **Response:**
  - 200 OK: Sign in successful with a JWT token.
  - 400 Bad Request: Invalid input data.
  - 404 Not Found: User not found.
  - 500 Internal Server Error: If something went wrong.

### 3. Create Blog

- **Route:** `/blog`
- **Method:** `POST`
- **Description:** Create a new blog post (requires a valid JWT token).
- **Headers:** `Authorization: Bearer <token>`
- **Request Body:**
  - `title: Blog Title`
  - `content: Blog content here...`
  - `published: true`
- **Response:**
  - 200 OK: Blog post successfully created with post ID.
  - 400 Bad Request: Invalid input data.
  - 401 Unauthorized: Invalid or missing token.
  - 500 Internal Server Error: If something went wrong.

### 4. Get All Blogs

- **Route:** `/blog`
- **Method:** `GET`
- **Description:** Retrieve all blog posts.
- **Response:**
  - 200 OK: List of blog posts.
  - 404 Not Found: No blogs found.
  - 500 Internal Server Error: If something went wrong.

### 5. Get Single Blog

- **Route:** `/blog/:id`
- **Method:** `GET`
- **Description:** Retrieve a single blog post by its ID.
- **Request Params:** `id` (string) - The ID of the blog post.
- **Response:**
  - 200 OK: The requested blog post.
  - 404 Not Found: Blog not found.
  - 500 Internal Server Error: If something went wrong.

### 6. Update Blog

- **Route:** `/blog/:id`
- **Method:** `PATCH`
- **Description:** Update an existing blog post by its ID (requires a valid JWT token).
- **Headers:** `Authorization: Bearer <token>`
- **Request Params:** `id` (string) - The ID of the blog post.
- **Request Body:**
  - `title: Updated Blog Title`
  - `content: Updated blog content here...`
  - `published: false`
- **Response:**
  - 200 OK: Blog post successfully updated.
  - 400 Bad Request: Invalid input data.
  - 401 Unauthorized: Invalid or missing token.
  - 404 Not Found: Blog not found.
  - 500 Internal Server Error: If something went wrong.

### 7. Get User Info

- **Route:** `/me`
- **Method:** `GET`
- **Description:** Retrieve the current logged-in user's information.
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  - 200 OK: User information.
  - 401 Unauthorized: Invalid or missing token.
  - 500 Internal Server Error: If something went wrong.

## Error Handling

- Each route is wrapped with error handling to return appropriate status codes and messages.
