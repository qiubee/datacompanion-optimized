const express = require("express");
const router = express.Router();

// controllers
const start = require("./controllers/start");
const login = require("./controllers/login");
const key = require("./controllers/key");
const choose = require("./controllers/choose-companion");
const overview = require("./controllers/overview");
const access = require("./controllers/access");
const companion = require("./controllers/companion");

router.get("/", start)
    .get("/login", login)
    .get("/sleutel", key)
    .get("/kies-datahulpje", choose)
    .get("/overzicht", overview)
    .post("/login", access)
    .post("/companion", companion);

module.exports = router;
