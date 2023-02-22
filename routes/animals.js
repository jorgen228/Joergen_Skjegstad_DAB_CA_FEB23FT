var express = require("express");
var router = express.Router();
const db = require("../models");
const AnimalsService = require("../services/AnimalsService");
const animalsService = new AnimalsService(db);
const SpeciesService = require("../services/SpeciesService");
const speciesService = new SpeciesService(db);
const { isAdmin } = require("./middleware");
const todaysDate = new Date();
console.log(todaysDate);

router.get("/", isAdmin, async function (req, res, next) {
  // const animals = await animalsService.getAll();
  const animals = await animalsService.getAll2();
  const species = await speciesService.getAll();
  for (let i = 0; i < animals.length; i++) {
    const birthday = new Date(animals[i].birthday);
    const birthdayMont = birthday.getMonth();
    const todayMonth = todaysDate.getMonth();
    let yearsOld = todaysDate.getFullYear() - birthday.getFullYear();
    if (birthdayMont - todayMonth < 0) {
      yearsOld--;
    }
    animals[i].age = yearsOld;
  }

  console.log(animals[0]);
  console.log(species[0]);
  // console.log(animals2[0])
  res.render("animals", { user: req.user, animals: animals, admin: admin });
});

module.exports = router;
