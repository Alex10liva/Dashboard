const {
    getLocksData
} = require('./private/API')

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/inicio.html');
});

app.get('/estadisticas', function(request, response) {
    response.sendFile(__dirname + '/public/estadisticas.html');
});

app.get('/locks', getLocksData)

app.listen(3000, function() {
    console.log("Running Express");
});