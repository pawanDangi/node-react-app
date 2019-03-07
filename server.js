const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const models = require('./models');
const streams = require('./routes/api/streams');

const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/streams', streams); 

const port = process.env.PORT || 5000;

models.sequelize.sync().then(() => {
  /**
   * Listen on provided port, on all network interfaces.
   */
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
