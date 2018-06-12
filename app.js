var express = require("express");
var app = express();
app.set('view engine','ejs');

//Setting static assets
var path = require('path');
//Telling express that static assets are in the public dir
app.use(express.static(path.join( __dirname,'public')));

//------Routes-------------
var routes = require('./routes');

//------home---------------
app.get('/',routes.home);

//------single movie---------------
app.get('/star_wars_episode/:episode_number?',routes.single_episode);

//------Non exisiting route.
app.get('*',routes.not_found);

app.listen(process.env.PORT || 3000);