var express = require('express');
var app = express();

// Serving static paegs - web client for mobile phones
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/upload', function(req, res) {
    // TODO
    console.log("Image uploaded");
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
