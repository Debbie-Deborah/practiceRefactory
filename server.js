//requiring neccessary dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

//requiring the database
const config = require('./config/database');

//requiring routes
const register = require('./routes/registerRoute');

//instatianting the server
const server = express();

//creating a connection to mongoDB
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open', () => {
    console.log('Successfully connected to mongoDB')
});
db.on('error', (err) => {
    console.log(err)
});

//setting up the view engine
server.engine('pug', require('pug').__express);
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));

//body parser middleware section
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(bodyParser.json());

//setting directory for static files
server.use(express.static(path.join(__dirname, 'public')));

//express flash middle ware
server.use(require('connect-flash')());
server.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//express session middle ware
server.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
    //the above keeps track of the different users that have successfully accessed the system according to their sessions.
}));


//password configuration
require('./config/passport')(passport);
//passport middleware
server.use(passport.initialize());
server.use(passport.session());
server.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

//the route section
server.use('/', register);

//establish the server listening port
server.listen(4040, () => {
    console.log('The server has started on port 4040')
});


