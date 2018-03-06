var database = require('./../database/databse_config');

const Card = database.sequelize.define('Card', {
    title: {
      type: database.Sequelize.STRING
    },
    description: {
      type: database.Sequelize.TEXT
    },
    status: {
        type: database.Sequelize.STRING
    }
  },
  {
    timestamps: false
  });

  exports.Card = Card ;