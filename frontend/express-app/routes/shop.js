const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

// API endpoint for fetching shows
router.get('/shows', async (req, res) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/shows'); // Replace with your actual API URL
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const shows = await response.json();
        res.json(shows);
    } catch (error) {
        console.error('Error fetching shows:', error.message); // Log the error message
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
