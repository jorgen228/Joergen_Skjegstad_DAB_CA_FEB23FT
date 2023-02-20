var express = require("express");
var router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../models");
const UserService = require("../services/UserService");
const userService = new UserService(db);

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    let user = userService.getOneByName(username);
    if (user && user.password == password) {
      return cb(null, user);
    } else {
      return cb(null, false);
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.Username});
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.post(
  "/login/password",
  passport.authenticate("local", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  })
);

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", user: null });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express", user: null });
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Express", user: null });
});

module.exports = router;
