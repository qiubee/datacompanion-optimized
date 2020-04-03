function overview(req, res) {
    res.render("overview", {
        title: "Overzicht",
        companion: "vivi"
    });
}

module.exports = overview;