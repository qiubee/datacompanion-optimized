const express = require("express");

const app = express();
const port = 8000;

app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', function (req, res) { 
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});