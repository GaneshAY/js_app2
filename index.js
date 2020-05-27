
var express = require('express');

var app = express();

app.get('/', (req, res) => { 
    console.log("root path");
    res.send("Calvin and Hobbes");
});

app.get('/hobbes', (req, res) => )



app.listen(27017, () => console.log("App Started..."));
