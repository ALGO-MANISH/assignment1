const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Discussion = require('./discussion');

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  likes: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  replies: {
    type: DataTypes.JSON,
    defaultValue: []
  }
}, {});

Comment.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
Comment.belongsTo(Discussion, { as: 'discussion', foreignKey: 'discussionId' });

module.exports = Comment;
