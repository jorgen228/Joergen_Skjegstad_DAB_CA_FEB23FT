

module.exports = (sequelize, Sequelize) => {
  const AnimalTemp = sequelize.define(
    "AnimalTemp",
    {
    },
    {
      timestamps: false,
    }
  );
  AnimalTemp.associate = function (model) {
  };
  return AnimalTemp;
};
