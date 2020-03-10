const express = require("express");
const hbs = require("express-handlebars");

// server
const app = express();
const port = 8080;

// set handlebars as templating engine
app.set("view engine", "hbs");
app.engine( "hbs", hbs( { 
    extname: "hbs", 
    defaultLayout: "default", 
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/"
  }));

// use "public" folder for static files
app.use(express.static("public"));

// routing
// import routes from router file
const router = require("./router/router");

// register partials
app.use("/", router);

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});