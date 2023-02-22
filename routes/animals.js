var express = require("express");
var router = express.Router();
const db = require("../models");
const AnimalsService = require("../services/AnimalsService");
const animalsService = new AnimalsService(db);
const { isAdmin } = require("./middleware");

router.get("/", isAdmin, async function (req, res, next) {
  let animals = await animalsService.getAll();
  res.render("animals", { user: req.user, animals: animals, admin: admin});
});

module.exports = router;
