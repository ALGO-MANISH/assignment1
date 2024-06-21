const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/users');
const discussionRoutes = require('./routes/discussions');
const commentRoutes = require('./routes/comments');

const app = express();

sequelize.sync();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/discussions', discussionRoutes);
app.use('/comments', commentRoutes);

module.exports = app;
