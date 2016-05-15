const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const server = express();

server.use(morgan('dev'));
server.use(compression());

/**
 * Setup static file serving before any other routes
 */
const buildDir = __dirname + '/frontend/dist';
server.use('/', express.static(buildDir));

/**
 * Serves the same index.html for all routes. Allows
 * using URLs without hashes. This is a naive approach so
 * it might not maybe good for production use.
 */
server.get('*', function rootRoute(req, res) {
  res.sendFile(buildDir + '/index.html');
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server started in http://localhost:${port}/`);
