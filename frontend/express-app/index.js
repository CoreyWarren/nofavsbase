const express = require('express');
const cors = require('cors');
const path = require('path');
const apiShows = require('./routes/shop.js');

const app = express();
app.use(express.json());
app.use(cors());

// Use the API routes
app.use('/api', apiShows);

// Serve static files (if needed, otherwise you can ignore this)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Set up the port for the server to listen on
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Coco, the Express Server is listening on port: ${PORT}`));
