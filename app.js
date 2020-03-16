require("dotenv").config();
const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");

// server
const app = express();
const port = 8000;

// set handlebars as templating engine
app.set("view engine", "hbs");
app.engine( "hbs", hbs( { 
    extname: "hbs", 
    defaultLayout: "default", 
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/"
  }));

// use public folder for static files
app.use(express.static("public"));

// use body-parser to read data from post requests
app.use(bodyParser.urlencoded({ extended: false }));

// routing
const router = require("./router/router");
app.use("/", router);

app.listen(port, function () {
    console.log(`Listening on port ${port}\n(Go to \u001b[1m\u001b[36mlocalhost:${port}\u001b[0m in your browser)`);
});