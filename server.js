var express = require("express");
var swig = require('swig');
var http = require("http");
var bodyparser = require('body-parser');
var console = require('console');
var socketio = require('socket.io');

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

var server = http.createServer(app);
server.listen(8080, console.log("Server ready and listening on http://0.0.0.0:8080"));
var io = socketio.listen(server);

/* Bind the socketio callbacks */
io.sockets.on('connection', function(socket) {
    socket.on('random', function() {
        socket.emit('number', Math.round(Math.random()*100));
    });
    
    socket.emit("connected");
});
