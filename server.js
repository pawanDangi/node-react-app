import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import auth from './middlewares/auth';
import tables from './tables';
import streams from './routes/streams';

const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/streams', auth, streams);

// Serve static assets if in production
if (process.env.NODE_ENV === 'prod') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

tables.sequelize.sync().then(() => {
  /**
   * Listen on provided port, on all network interfaces.
   */
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
