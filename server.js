import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

import auth from './middlewares/auth';
import schemas from './schemas';
import streams from './routes/streams';

const app = express();

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: '',
  basePath: '/',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Set static folder
app.use(express.static('swagger/dist'));

// Swagger
app.get('/api-doc', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'swagger', 'dist', 'index.html'));
});

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

schemas.sequelize.sync({ alter: true }).then(() => {
  /**
   * Listen on provided port, on all network interfaces.
   */
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
