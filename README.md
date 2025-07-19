# Short url

Short url is a simple and efficient URL shortener built with Node.js. It allows users to convert long URLs into short, easy-to-share links.

## Features

- Generate short URLs for any valid long URL
- Redirect short URLs to the original long URL
- View analytics (total clicks) for each short URL
- User authentication (signup/login)
- Admin dashboard to view all URLs
- Simple API for integration
- Easy to set up and run locally

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Short\ Url
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the server with:

```bash
npm start
```

The server will run on `http://localhost:5000`.

## API Endpoints & Usage

### 1. User Signup

- **Endpoint:** `POST /user`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "yourusername",
    "password": "yourpassword"
  }
  ```
- **Example:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"username":"testuser","password":"testpass"}' http://localhost:5000/user
  ```

### 2. User Login

- **Endpoint:** `POST /user/login`
- **Description:** Login as an existing user.
- **Request Body:**
  ```json
  {
    "username": "yourusername",
    "password": "yourpassword"
  }
  ```
- **Example:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"username":"testuser","password":"testpass"}' http://localhost:5000/user/login
  ```

### 3. Shorten a URL

- **Endpoint:** `POST /`
- **Description:** Generate a short URL for a given long URL (requires authentication).
- **Request Body:**
  ```json
  {
    "url": "https://www.example.com"
  }
  ```
- **Example:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"url":"https://www.example.com"}' http://localhost:5000/
  ```
- **Response:**
  ```json
  {
    "shortUrl": "http://localhost:5000/abc123"
  }
  ```

### 4. Redirect to Original URL

- **Endpoint:** `GET /:shortId`
- **Description:** Redirects to the original long URL using the short URL.
- **Example:**  
  Visit `http://localhost:5000/abc123` in your browser.

### 5. View Analytics (Total Clicks)

- **Endpoint:** `GET /analytics/:shortId`
- **Description:** Get analytics (total clicks) for a specific short URL.
- **Example:**
  ```bash
  curl http://localhost:5000/analytics/abc123
  ```
- **Response:**
  ```json
  {
    "totalClicks": 5,
    "url": "https://www.example.com"
  }
  ```

### 6. User Dashboard (Home)

- **Endpoint:** `GET /`
- **Description:** View all your created short URLs (requires login, accessible to Normal and Admin users).
- **Example:**  
  Visit `http://localhost:5000/` in your browser after logging in.

### 7. Admin Dashboard

- **Endpoint:** `GET /admin`
- **Description:** View all short URLs in the system (requires Admin login).
- **Example:**  
  Visit `http://localhost:5000/admin` in your browser as an Admin user.

### 8. Signup Page

- **Endpoint:** `GET /signup`
- **Description:** Render the signup page for new users.

### 9. Login Page

- **Endpoint:** `GET /login`
- **Description:** Render the login page for existing users.

## License

This project is licensed under the MIT License.
