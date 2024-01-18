const express = require("express");
const startpage = require("../controllers/start-page-controller");
const dashboard = require("../controllers/dashboard-controller");


const router = express.Router();




router.get("/", startpage.welcome);

router.get("/dashboard", startpage.dashboard);

router.get("/dashboard/addmeds", dashboard.addmeds);

router.get("/about", startpage.about);






module.exports = router;