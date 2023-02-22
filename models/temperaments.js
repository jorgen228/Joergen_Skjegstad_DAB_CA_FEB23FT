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
  // Temperament.associate = function (model) {
  //   Temperament.hasMany(model.AnimalTemp);
  // };
  return Temperament;
};
