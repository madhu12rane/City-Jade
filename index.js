var express=require('express');
var jade=require('jade');
var app=express();
var routes=require('./routes/route.js');
app.use(express.static('public',{root:'.'}));
app.set('view engine','jade');
app.get('/',routes.home);
app.get('/:city',routes.city);
var port= process.env.PORT || 8080
app.listen(port);