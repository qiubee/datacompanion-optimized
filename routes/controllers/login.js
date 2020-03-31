function login(req, res) {
    res.render("login", {
        title: "Inloggen"
    });
}

module.exports = login;