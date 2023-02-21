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
    Temperament.belongsTo(model.Animal);
  };
  return Temperament;
};
