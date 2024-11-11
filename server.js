const express = require('express');
const path = require('path');
const sequelize = require('./config/database');
const Club = require('./models/club');
const Event = require('./models/event');  // Import the Event model

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Test the database connection
sequelize.authenticate()
    .then(() => console.log('✅ Connected to the MySQL database (fsd_mini).'))
    .catch(err => console.error('❌ Unable to connect to the database:', err));

// Sync the models with the database
sequelize.sync()  // Sync all models, including both Event and Club
    .then(() => console.log('✅ Tables synced successfully'))
    .catch(err => console.error('❌ Error syncing tables:', err));

// API to handle event form submission
app.post('/submit-event', async (req, res) => {
    console.log('Received data:', req.body);  // Log the request body
    const { event_name, event_description, registration_link } = req.body;

    if (!event_name || !event_description) {
        return res.status(400).json({ error: 'Event name and description are required.' });
    }

    try {
        const newEvent = await Event.create({
            event_name,
            event_description,
            registration_link,
        });
        res.status(201).json({ message: 'Event added successfully', event: newEvent });
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).json({ error: 'Error adding event' });
    }
});

// API to fetch all events
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Error fetching events' });
    }
});

// API to fetch all clubs
app.get('/api/clubs', async (req, res) => {
    try {
        const clubs = await Club.findAll({ attributes: ['club_name', 'club_description'] });
        res.json(clubs);
    } catch (error) {
        console.error('Error fetching clubs:', error);
        res.status(500).json({ error: 'Error fetching clubs' });
    }
});

// API to fetch a specific club by name
app.get('/api/club-details', async (req, res) => {
    const clubName = req.query.club_name;
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

// Serve the event form at the '/event-form' route
app.get('/event-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'eventform.html'));
});

// Fallback route to serve the React app (index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
