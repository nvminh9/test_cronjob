const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3800;

// --- CONFIG ---
// CORS
app.use(cors());
// req.body
app.use(express.json()); // For json
app.use(express.urlencoded({ extended: true })); // For form data
// static file
app.use(express.static(path.join(__dirname, 'assets'))); // Không cần Auth

// Test
app.get('/', (req, res) => {
    res.send('Hello from test_cronjob');
});

// Checking
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});