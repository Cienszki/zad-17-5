var express = require('express');

var app = express();

app.use('/store', function(req, res, next){
    console.log('siema');
    next();
});

app.get('/store', function(req, res){
    res.send('to jest sklep');
});

app.listen(3000);