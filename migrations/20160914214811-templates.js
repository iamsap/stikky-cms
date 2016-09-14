'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('templates', {
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
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('templates');
  }
};
