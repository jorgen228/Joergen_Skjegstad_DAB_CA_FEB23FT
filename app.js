require("dotenv").config();
const sequelize = require("sequelize");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./models");
var passport = require("passport");
var session = require("express-session");
var SQLiteStore = require("connect-sqlite3")(session);
db.sequelize.sync({ alter: true });

var indexRouter = require("./routes/index");
var animalsRouter = require("./routes/animals");
var speciesRouter = require("./routes/species");
var temperamentRouter = require("./routes/temperament");

var app = express();

app.use(
  session({
    secret: "random text",
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore(),
  })
);
app.use(passport.authenticate("session"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/animals", animalsRouter);
app.use("/species", speciesRouter);
app.use("/temperament", temperamentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
