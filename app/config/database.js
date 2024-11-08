const { Sequelize } = require('sequelize');

// Replace with your own database credentials
const sequelize = new Sequelize('fsd_mini', 'root', 'Nishi2*04#', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
