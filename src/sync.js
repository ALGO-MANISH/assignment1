const sequelize = require('./config/db');
const User = require('./models/user');
const Discussion = require('./models/discussion');
const Comment = require('./models/comment');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
