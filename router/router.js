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

router.get("/kies-datahulpje", function(req, res) {
    res.render("companion", {
        title: "Kies je eigen datahulpje"
    });
});

router.get("/overzicht", function(req, res) {
    res.render("overview", {
        title: "Overzicht"
    });
});

module.exports = router;
