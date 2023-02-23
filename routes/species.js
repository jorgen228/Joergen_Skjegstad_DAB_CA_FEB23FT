var express = require("express");
var router = express.Router();
const db = require("../models");
const SpeciesService = require("../services/SpeciesService");
const speciesService = new SpeciesService(db);
const AnimalsService = require("../services/AnimalsService");
const animalsService = new AnimalsService(db);
const { isAdmin } = require("./middleware");

router.get("/", isAdmin, async function (req, res, next) {
  const species = await speciesService.getAll();
  res.render("species", { user: req.user, species: species, admin: admin });
});

router.post("/", async function (req, res, next) {
  await speciesService.updateOne(req.body.newName, req.body.id);
  res.end();
});

router.post("/create", async function (req, res, next) {
  await speciesService.create(req.body.name);
  res.end();
});

router.delete("/", async function (req, res, next) {
  animals = await animalsService.getOneBySpecies(req.body.id);
  if (animals.length == 0) {
    await speciesService.deleteOne(req.body.id);
  }
  res.end();
});

module.exports = router;
