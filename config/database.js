const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fsd_mini', 'root', 'Nishi2*04#', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;
