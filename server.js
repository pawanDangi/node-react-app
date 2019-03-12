import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import authenticate from './authenticate';
import models from './models';
import streams from './routes/api/streams';

const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/streams', authenticate, streams);

// Serve static assets if in production
if (process.env.NODE_ENV === 'prod') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

models.sequelize.sync().then(() => {
  /**
   * Listen on provided port, on all network interfaces.
   */
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
