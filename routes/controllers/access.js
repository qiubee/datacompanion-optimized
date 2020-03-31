require("dotenv").config();

// get users
const firstUser = process.env.USER_1.split(",");
const secondUser = process.env.USER_2.split(",");

// "database"
const users = [{
    email: firstUser[0],
    key: firstUser[1],
    companion: firstUser[3]
},
{
    email: secondUser[0],
    key: secondUser[1],
    companion: secondUser[2]
}];

function checkUser(email, key) {
    const identifiedUser = users.filter(function (user) {
        return user.email === email && user.key === key;
    });

    return identifiedUser[0];
}

function checkForCompanion(email, key) {
    const user = checkUser(email, key);
    return user.companion;
}

function accessToOverview(req, res) {
    // user input
    const email = req.body.email;
    const key = req.body.key;

    if (checkUser(email, key)) {
        if (checkForCompanion(email, key) !== undefined) {
            res.redirect("/overzicht");
        } else {
            res.redirect("/kies-datahulpje");
        }
    } else {
        res.redirect("/login");
    }
}

module.exports = accessToOverview;