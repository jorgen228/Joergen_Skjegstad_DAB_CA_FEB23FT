class UserService {
  constructor(db) {
    this.client = db.sequelize;
    this.User = db.User;
    this.Adoption = db.Adoption;
  }
  async create(fullName, username, password) {
    return this.User.create({
      fullName: fullName,
      username: username,
      password: password,
    });
  }
  async getAll() {
    return this.User.findAll({
      where: {},
    });
  }
  async getOne(id) {
    return this.User.findOne({
      where: {
        id: id,
      },
    });
  }
  async getOneByName(username) {
    return this.User.findOne({
      where: {
        username: username,
      },
    });
  }
}

module.exports = UserService;
