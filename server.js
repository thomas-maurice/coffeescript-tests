var express = require("express");
var swig = require('swig');
var bodyparser = require('body-parser');
var console = require('console');

var app = express();

app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render('index', {});
});

app.post("/", function(req, res) {
    res.end('{"value": "'+Math.round(Math.random()*100)+'"}');
});

app.listen(8080, console.log("server ready"));
