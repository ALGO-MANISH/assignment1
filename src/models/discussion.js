const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Discussion = sequelize.define('Discussion', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hashtags: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  viewCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  likes: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  comments: {
    type: DataTypes.JSON,
    defaultValue: []
  }
}, {});

Discussion.belongsTo(User, { as: 'author', foreignKey: 'authorId' });

module.exports = Discussion;
