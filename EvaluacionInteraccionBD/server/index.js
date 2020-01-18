const http = require('http'),
path = require('path'),
RouterEvents = require('./routesEvents.js'),
RouterUsers = require('./routesUsers.js'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

const PORT = 3000;
const app = express();

var url = 'mongodb://localhost/eventsDB';

const Server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../client'));
app.use('/events', RouterEvents);
app.use(RouterUsers);

Server.listen(PORT, function () {
  console.log("Server listening port: " + PORT);
});

mongoose.connect(url);
