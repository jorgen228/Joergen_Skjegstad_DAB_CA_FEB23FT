var express = require("express");
var router = express.Router();
const db = require("../models");

const TemperamentsService = require("../services/TemperamentsService");
const temperamentsService = new TemperamentsService(db);

router.get("/", async function (req, res, next) {
  admin = null;
  if (req.user?.role == "admin") {
    admin = req.user;
  }
  let temperaments = await temperamentsService.getAll();
  res.render("temperament", {
    user: req.user,
    temperament: temperaments,
    admin: admin,
  });
});

router.post("/update", async function (req, res, next) {
  res.render("index", { user: req.user });
});

module.exports = router;
