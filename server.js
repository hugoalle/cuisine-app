const express = require('express')
const path = require('path');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cuisine-kit')
    .then(() => console.log('connected to cuisine-kit database'))
    .catch((err) => console.error('fail to connect to database', err))

const app = express()
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static', '/index.html'));
});

app.listen(3000)