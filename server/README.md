# Intern Dashboard - Backend

This is the backend for the Intern Dashboard application, built with Node.js and Express.

## Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the server:**
    ```bash
    node index.js
    ```

The server will be running at `http://localhost:3001`.

## Deployment

This server is ready to be deployed to [Render](https://render.com/) on the free tier.

1.  Create a new "Web Service" on Render and connect your GitHub repository.
2.  Set the "Build Command" to `npm install`.
3.  Set the "Start Command" to `node index.js`.
4.  Render will automatically detect the Node.js environment and deploy your application.
