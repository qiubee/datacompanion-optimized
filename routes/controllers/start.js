function start(req, res) {
    res.render("index", { 
        title: "Het Datahulpje"
    });
}

module.exports = start;