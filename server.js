var path           = require('path'),
    express        = require('express'),
    bodyParser     = require('body-parser'),
    history        = require('connect-history-api-fallback');
    methodOverride = require('method-override'),
    exphbs         = require('express-handlebars'),
    database       = require('./database/databse_config');
    app            = express();

// assets in the public folder
app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname, 'views')));
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//database connection
database.sequelize.authenticate()
require("./routing/routes");
//server connecting
app.listen(3000)
