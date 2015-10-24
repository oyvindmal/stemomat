var express = require('express');
var port = process.env.PORT || 1337;
var app = require('express')();
var http = require('http').Server(app);

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
