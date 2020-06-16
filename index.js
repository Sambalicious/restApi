var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var routes = require('./routes/api');
var app = express();


///connect to the database 
mongoose.connect('mongodb://localhost/restApi');
mongoose.Promise = global.Promise
///use body-parser as middleware

app.use(bodyParser.json());

/////use route
app.use('/api', routes);




app.listen(process.env.port || 8080, function (){
    console.log('listening on port 8080');
})

