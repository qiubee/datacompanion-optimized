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

router.post("/login", function(req, res) {
    // "database"
    const user1 = {email: "m@m.m", key: "4k8nd$d20s"};
    const email = req.body.email;
    const key = req.body.key;
    console.log(email, key);
    if (user1.email === email && user1.key === key) {
        res.redirect('/kies-datahulpje');
    } else {
        res.redirect("/login");
    }
});

module.exports = router;
