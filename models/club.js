const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Club = sequelize.define('base', {
    club_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    club_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    club_mentors: {
        type: DataTypes.STRING,
        allowNull: true
    },
    club_president: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email_id: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'base'
});

module.exports = Club;
