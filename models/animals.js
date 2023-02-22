module.exports = (sequelize, Sequelize) => {
  const Animal = sequelize.define(
    "Animal",
    {
      name: Sequelize.DataTypes.STRING,
      species: Sequelize.DataTypes.STRING,
      birthday: Sequelize.DataTypes.DATE,
      temperament: Sequelize.DataTypes.INTEGER,
      size: Sequelize.DataTypes.STRING,
      adopted: Sequelize.DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    }
  );
  Animal.associate = function (model) {
    Animal.hasOne(model.Adoption);
    Animal.hasOne(model.Species, {
      foreignKey: "id",
    });
    Animal.hasMany(model.AnimalTemp, {
      foreignKey: "animalId",
    });
  };
  return Animal;
};
