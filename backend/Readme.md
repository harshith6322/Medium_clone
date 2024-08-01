# Hono Prisma Blog API

This project is a serverless blog API built using [Hono](https://github.com/honojs/hono) framework, Prisma as the ORM, and deployed on Cloudflare Workers. The backend is connected to a PostgreSQL database.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Features

- User Signup and Signin with JWT authentication.
- Middleware for authentication on protected routes.
- CRUD operations for blog posts.
- Integration with PostgreSQL database using Prisma ORM.

## Requirements

- Node.js
- Cloudflare Workers account
- PostgreSQL database

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/hono-prisma-blog-api.git
   cd hono-prisma-blog-api
   ```
2. **Set up environment variables:**

```
   Create a .env file in the root directory and add the following variables:

```

3. **Deploy to Cloudflare Workers:**

```
Follow the Cloudflare Workers documentation to deploy your project:
Cloudflare Workers Quick Start
```

## API Endpoints

## Authentication

- POST /api/v1/signup

Request Body: { "email": "string", "password": "string", "name": "string" }
Response: { "err": false, "msg": "account has created", "token": "jwt_token" }

- POST /api/v1/signin

Request Body: { "email": "string", "password": "string" }
Response: { "err": false, "msg": "signin done", "token": "jwt_token" }

## Blog Posts

- POST /api/v1/blog

- Protected route, requires JWT token in Authorization header.
  Request Body: { "title": "string", "content": "string", "published": "boolean" }
  Response: { "err": false, "msg": "post have been created", "published": "boolean", "postId": "id" }

-PUT /api/v1/blog/:id

- Protected route, requires JWT token in Authorization header.
  Request Body: { "title": "string", "content": "string", "published": "boolean" }
  Response: { "err": false, "msg": "updated successfully" }
  GET /api/v1/blog

## Public route, no authentication required.

Response: { "posts": [ { "id": "id", "title": "string", "content": "string", "published": "boolean", "authorID": "id" } ] }

## Environment Variables

DATABASE_URL: The connection string for your PostgreSQL database.
JWT_TOKEN: The secret key used to sign JWT tokens.

## Usage

- To run the project locally, use the following command:
  npm run start

## Deployment

To deploy the project, follow the Cloudflare Workers deployment documentation. Make sure to set the environment variables in your Cloudflare Workers environment settings.

Backend URL: https://backend.*************.workers.dev/api/v1
