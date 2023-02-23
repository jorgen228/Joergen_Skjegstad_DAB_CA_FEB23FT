module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      fullName: Sequelize.DataTypes.STRING,
      username: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      Role: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: "member",
      },
    },
    {
      timestamps: false,
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Adoption);
  }
  return User;
};
