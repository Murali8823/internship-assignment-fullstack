const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/api/intern', (req, res) => {
  const internDataPath = path.join(__dirname, 'data', 'intern.json');
  fs.readFile(internDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    res.json(JSON.parse(data));
  });
});

app.get('/api/leaderboard', (req, res) => {
  const leaderboardDataPath = path.join(__dirname, 'data', 'leaderboard.json');
  fs.readFile(leaderboardDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
