import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

import auth from './server/middlewares/auth';
import schemas from './server/schemas';
import streams from './server/routes/streams';
import dashboard from './server/routes/dashboard';

const app = express();

// swagger definition
const swaggerDefinition = {
  host: '',
  basePath: '/',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./server/routes/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Set static folder
app.use(express.static('server/swagger/dist'));

// Swagger
app.get('/api-doc', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, 'server', 'swagger', 'dist', 'index.html')
  );
});

// bodyParser middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/streams', auth, streams);
app.use('/api/dashboard', auth, dashboard);

// Serve static assets if in production
if (process.env.NODE_ENV === 'prod') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

schemas.sequelize.sync({ alter: true }).then(() => {
  /**
   * Listen on provided port, on all network interfaces.
   */
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
