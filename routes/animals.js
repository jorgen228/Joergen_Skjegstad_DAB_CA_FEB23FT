var express = require("express");
var router = express.Router();
const db = require("../models");
const AnimalsService = require("../services/AnimalsService");
const animalsService = new AnimalsService(db);

router.get("/", async function (req, res, next) {
  let animals = await animalsService.getAll();
  admin = null;
  if (req.user?.role == "admin") {
    admin = req.user;
  }
  res.render("animals", { user: req.user, animals: animals, admin: admin });
});

module.exports = router;
