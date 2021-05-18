var express = require('express');
var app = express();
var spokenToWritten = require('./spokenToWritten');

app.use(express.json());

var converter = new spokenToWritten();

app.post('/convert', function (req, res) {
    let input = req.body;
    res.send(converter.Convert(input['spoken_english']));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})