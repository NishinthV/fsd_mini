const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
    event_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event_description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    event_image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    registration_link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'events',
    timestamps: true,
});

module.exports = Event;
