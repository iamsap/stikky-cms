'use strict'
var Sequelize = require('sequelize');
var dbConfig = require('../../config/config.json');

var environment = process.env.NODE_ENV;
if (!environment) {
    environment = 'development';
}

var sequelize = new Sequelize('mysql://' + dbConfig[environment].username + ':' + (dbConfig[environment].password ? dbConfig[environment].password : '') + '@' + dbConfig[environment].host + ':3306/' + dbConfig[environment].database);

var Template = sequelize.define('templates', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    templateName: {
        type: Sequelize.TEXT,
    },
    templateDescription: {
        type: Sequelize.TEXT,
    },
}, {
    timestamps: false
});

module.exports = {sequelize:sequelize, Template:Template}