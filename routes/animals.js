var express = require("express");
var router = express.Router();
const db = require("../models");
const AnimalsService = require("../services/AnimalsService");
const animalsService = new AnimalsService(db);
const SpeciesService = require("../services/SpeciesService");
const speciesService = new SpeciesService(db);
const AdoptionsService = require("../services/AdoptionsService");
const adoptionsService = new AdoptionsService(db);
const { isAdmin } = require("./middleware");
const todaysDate = new Date();
console.log(todaysDate);

router.get("/", isAdmin, async function (req, res, next) {
  const animals = await animalsService.getAll();
  for (let i = 0; i < animals.length; i++) {
    const birthday = new Date(animals[i].birthday);
    const birthdayMont = birthday.getMonth();
    const todayMonth = todaysDate.getMonth();
    let yearsOld = todaysDate.getFullYear() - birthday.getFullYear();
    if (birthdayMont - todayMonth < 0) {
      yearsOld--;
    }
    animals[i].age = yearsOld;
    animals[i].displayTemp = "";
    animals[i].Temperaments.forEach((temp) => {
      animals[i].displayTemp += temp.name + ",";
    });
  }
  res.render("animals", { user: req.user, animals: animals, admin: admin });
});

router.post("/", async function (req, res, next) {
  await animalsService.adoptOne(req.body.id);
  await adoptionsService.create(req.user.id, req.body.id)
  res.end();
});

router.post("/cancel", async function (req, res, next) {
  await animalsService.cancelAdoption(req.body.id);
  await adoptionsService.destroyOne(req.body.id)
  res.end();
});

module.exports = router;
