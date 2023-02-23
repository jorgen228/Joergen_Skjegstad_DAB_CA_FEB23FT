module.exports = (sequelize, Sequelize) => {
  const Animal = sequelize.define(
    "Animal",
    {
      name: Sequelize.DataTypes.STRING,
      birthday: Sequelize.DataTypes.DATE,
      size: Sequelize.DataTypes.STRING,
      adopted: Sequelize.DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    }
  );
  Animal.associate = function (model) {
    Animal.belongsTo(model.Species);
    Animal.belongsToMany(model.Temperament, { through: model.AnimalTemp });
    Animal.hasOne(model.Adoption);
  };
  return Animal;
};
