/**
 * Created by luis on 3/30/2016.
 */
'use strict';
var express=require('express');
var app=express();
var bodyParser =require( 'body-parser')
var morgan =require( 'morgan')
var mongoose =require( 'mongoose')

//Connect to mongoose
mongoose.connect('mongodb://localhost/kanban',{
   options:{
       db:{
           safe:true
       }
   }
});

mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});
app.use(function(req, res, next) {
    console.log(req.method=='OPTIONS');
    if(req.method=='OPTIONS'){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");

        res.status(204).end();
    }else{
        res.header("Access-Control-Allow-Origin", "*");
        next();
    }


});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());



app.use('/card',require('./server/card/index'));

app.use('*',function(req,res,next){
    res.status(404).send('Error 404aa Tha page does not exists');
});

app.listen(3000,function(){
    console.log(' Listening to port  3000')
});

module.exports=app;