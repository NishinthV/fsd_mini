const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
    event_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    event_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    registration_link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
}, {
    timestamps: true,  // Optional: Timestamps to track when the event was created/updated
    tableName: 'events'  // Ensures we use the 'events' table
});

module.exports = Event;
