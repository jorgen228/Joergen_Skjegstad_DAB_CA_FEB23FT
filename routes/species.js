var express = require('express');
var router = express.Router();
const db = require("../models");
const SpeciesService = require("../services/SpeciesService");
const speciesService = new SpeciesService(db);
const { isAdmin } = require("./middleware");

router.get('/', isAdmin, async function (req, res, next) {
    const species = await speciesService.getAll();
    res.render("species", {user: req.user, species: species, admin: admin})
})

router.post('/update', async function (req,res,next){
    res.render("index",{user: req.user})
})

module.exports = router;