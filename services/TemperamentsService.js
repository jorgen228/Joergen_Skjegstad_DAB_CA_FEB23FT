class TemperamentsService {
  constructor(db) {
    this.client = db.sequelize;
    this.Temperament = db.Temperament;
  }
  async create(name) {
    return this.Temperament.create({
      name: name,
    });
  }
  async getAll() {
    return this.Temperament.findAll({
      where: {},
    });
  }
}

module.exports = TemperamentsService;
