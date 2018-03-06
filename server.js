var path = require('path');
var express= require('express');
app=express();

// packge imported
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs  = require('express-handlebars');
var database = require('./database/databse_config');


//============================================
        /* Let's the game begin */
//============================================

// assets in the public folder
app.use('/static', express.static('public'));
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// set engine handlebars
app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');
//database connection
database.sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
// require Routes
require("./routing/routes");

//server connecting
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Hi ! the server is running on port "+port);
})
