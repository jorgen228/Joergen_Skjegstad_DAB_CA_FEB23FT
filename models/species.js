module.exports = (sequelize, Sequelize) => {
  const Species = sequelize.define("Species", {
    name: Sequelize.DataTypes.STRING,
  }, {
    timestamps: false
  });
  Species.associate = function (model) {
    Species.hasMany(model.Animal);
  }
  return Species;
}