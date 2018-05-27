const mongoose = require('mongoose');
const config = require('./../config');

mongoose.connect(config.mongodb.uri, { useMongoClient: true });

mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to ' + config.mongodb.uri);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});