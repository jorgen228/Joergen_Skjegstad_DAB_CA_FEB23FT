var express = require("express");
var router = express.Router();
const db = require("../models");
const TemperamentsService = require("../services/TemperamentsService");
const temperamentsService = new TemperamentsService(db);
const { isAdmin } = require("./middleware");

router.get("/", isAdmin, async function (req, res, next) {
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
