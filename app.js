var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/inicio.html');
});

app.listen(3000, function() {
    console.log("Running Express");
});