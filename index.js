var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var routes = require('./routes/api');
var app = express();


///connect to the database 
mongoose.connect('mongodb://localhost/restApi');
mongoose.Promise = global.Promise

///serve the static pagesti
app.use(express.static('public'));

///use body-parser as middleware
app.use(bodyParser.json());

////route Middleware
app.use('/api', routes);

///error handling
app.use((err, req, res, next)=>{
    console.log(err)
    res.status(422).send({error: err.message})
})

app.listen(process.env.port || 8080, function (){
    console.log('listening on port 8080');
})

