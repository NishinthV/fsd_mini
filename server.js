const express = require('express');
const path = require('path');
const sequelize = require('./config/database');
const Club = require('./models/club');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory (React build folder)
app.use(express.static(path.join(__dirname, 'public')));

// Test the database connection
sequelize.authenticate()
    .then(() => console.log('✅ Connected to the MySQL database.'))
    .catch(err => console.error('❌ Unable to connect to the database:', err));

// Serve the main React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route to fetch all clubs with basic details
app.get('/api/clubs', async (req, res) => {
    try {
        const clubs = await Club.findAll({
            attributes: ['club_name', 'club_description'],
        });
        res.json(clubs);
    } catch (error) {
        console.error('Error fetching clubs:', error);
        res.status(500).json({ error: 'Error fetching clubs' });
    }
});

// API route to fetch a specific club by name
app.get('/api/club-details', async (req, res) => {
    const clubName = req.query.club_name; // Using query parameters for better readability
    try {
        const club = await Club.findOne({ where: { club_name: clubName } });
        if (club) {
            res.json(club);
        } else {
            res.status(404).json({ error: 'Club not found' });
        }
    } catch (error) {
        console.error('Error fetching club data:', error);
        res.status(500).json({ error: 'Error fetching club data' });
    }
});

// Fallback route for serving the React app for any other route (supports client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
