'use strict';
module.exports = function(sequelize, DataTypes) {
  var rocks = sequelize.define('rocks', {
    color: DataTypes.STRING,
    shape: DataTypes.STRING,
    sizeInMM: DataTypes.INTEGER,
    rockType: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    foundDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return rocks;
};