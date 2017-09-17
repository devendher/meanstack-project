const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var configDb= require('./server/configDb.js');
//'127.0.0.1:27017/library';
mongoose.connect('mongodb://'+configDb.url+':'+configDb.port+'/'+configDb.db);
var db1= mongoose.connection;
db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', function() {
  console.log("Data base connected..");
});
console.log(configDb);
require('./server/routes/api.js')(app);
  app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(3000,'localhost');
console.log('Server running on 3000');
