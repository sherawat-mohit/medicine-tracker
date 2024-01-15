const express = require("express");
const startpage = require("../controllers/start-page-controller");


const router = express.Router();




router.get("/", startpage.welcome);






module.exports = router;