var express = require('express');
var router = express.Router();
const db = require("../models");
const SpeciesService = require("../services/SpeciesService");
const speciesService = new SpeciesService(db);

router.get('/', async function (req, res, next) {
    admin = null;
    if (req.user?.role == "admin") {
      admin = req.user;
    }
    const species = await speciesService.getAll();
    res.render("species", {user: req.user, species: species, admin: admin})
})

router.post('/update', async function (req,res,next){
    res.render("index",{user: req.user})
})

module.exports = router;