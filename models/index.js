const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
require("dotenv").config();

const connection = {
  database: process.env.DATABASE_NAME,
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  dialectmodel: process.env.DIALECTMODEL,
};

const sequelize = new Sequelize(connection);
const db = {};
db.sequelize = sequelize;

// db.models.users = require("./users")
// db.models.animals = require("./animals")
// db.models.adoptions = require("./adoptions")
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    console.log(model)
    db[model.name] = model;
  });

console.log(db)

module.exports = db;
