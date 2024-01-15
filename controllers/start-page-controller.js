module.exports.welcome = (req,res) => {
    res.render("welcome");
}

module.exports.dashboard = (req,res) => {
    res.render("dashboard");
}

module.exports.about = (req,res) => {
    res.render("about");
}