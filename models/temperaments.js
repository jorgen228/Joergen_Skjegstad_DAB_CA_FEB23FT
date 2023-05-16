module.exports = (sequelize, Sequelize) => {
  const Temperament = sequelize.define(
    "Temperament",
    {
      name: Sequelize.DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  Temperament.associate = function (model) {
    Temperament.belongsToMany(model.Animal, { through: model.AnimalTemp });
  };
  return Temperament;
};
