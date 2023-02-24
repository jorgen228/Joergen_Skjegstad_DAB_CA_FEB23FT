module.exports = (sequelize, Sequelize) => {
  const Adoption = sequelize.define(
    "Adoption",
    {
      DateOfAdoption: Sequelize.DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );
  Adoption.associate = function (model) {
    Adoption.belongsTo(model.User);
    Adoption.belongsTo(model.Animal);
  };

  return Adoption;
};
