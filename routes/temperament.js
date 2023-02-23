var express = require("express");
var router = express.Router();
const db = require("../models");
const TemperamentsService = require("../services/TemperamentsService");
const temperamentsService = new TemperamentsService(db);
const AnimalsService = require("../services/AnimalsService");
const animalsService = new AnimalsService(db);
const { isAdmin } = require("./middleware");

router.get("/", isAdmin, async function (req, res, next) {
  let temperaments = await temperamentsService.getAll();
  res.render("temperament", {
    user: req.user,
    temperament: temperaments,
    admin: admin,
  });
});

router.post("/", async function (req, res, next) {
  await temperamentsService.updateOne(req.body.newTempName, req.body.id);
  res.end();
});

router.delete("/", async function (req, res, next) {
  let animals = await animalsService.getOneByTemperament(req.body.id);
  if (animals.length == 0) {
    await temperamentsService.deleteOne(req.body.id);
  }
  res.end();
});

router.post("/create", async function (req, res, next) {
  await temperamentsService.create(req.body.name);
  res.end();
});

module.exports = router;
