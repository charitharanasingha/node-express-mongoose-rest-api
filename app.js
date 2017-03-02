var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var orderRouter = require('./routers/order');
require('./models/customer');
require('./models/item');

var app = express();

var PORT = 8080;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'vc_test';

/*var HOST_NAME = 'ds163679.mlab.com:63679';
var DATABASE_NAME = 'restaurant_vc';

var USER_NAME = 'charitharanasingha';
var PASSWORD = 'charithakandy';*/

//mongodb://<dbuser>:<dbpassword>@ds163679.mlab.com:63679/restaurant_vc

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);
//mongoose.connect('mongodb://' + USER_NAME + ':' + PASSWORD + '@' +  HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', orderRouter);

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});
