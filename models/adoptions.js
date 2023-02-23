module.exports = (sequelize, Sequelize) => {
  const Adoption = sequelize.define(
    "Adoption",
    {},
    {
      timestamps: true,
    }
  );
  Adoption.associate = function (model) {
    Adoption.belongsTo(model.User);
    Adoption.belongsTo(model.Animal);
  };

  return Adoption;
};
