module.exports = (sequelize, Sequelize) => {
  const Adoption = sequelize.define(
    "Adoption",
    {
      userId: Sequelize.DataTypes.INTEGER,
      animalId: Sequelize.DataTypes.INTEGER,
      dateOfAdoption: Sequelize.DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );
  // Adoption.associate = function (model) {
  //   Adoption.belongsTo(model.User);
  //   Adoption.belongsTo(model.Animal);
  // };
  return Adoption;
};
