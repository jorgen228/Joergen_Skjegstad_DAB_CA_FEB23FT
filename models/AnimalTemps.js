

module.exports = (sequelize, Sequelize) => {
  const AnimalTemp = sequelize.define(
    "AnimalTemp",
    {
      animalId: Sequelize.DataTypes.INTEGER,
      temperamentId: Sequelize.DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );
  // AnimalTemp.associate = function (model) {
  //   AnimalTemp.belongsTo(model.Animal);
  //   AnimalTemp.belongsTo(model.Temperament);
  // };
  return AnimalTemp;
};
