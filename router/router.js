const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("index", { 
        title: "Het Datahulpje"
    });
});

router.get("/login", function(req, res) {
    res.render("login", {
        title: "Login"
    });
});

router.get("/sleutel", function(req, res) {
    res.render("sleutel", {
        title: "Sleutel aanvragen"
    });
});

module.exports = router;
