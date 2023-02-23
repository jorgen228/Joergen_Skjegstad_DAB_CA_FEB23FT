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
  async updateOne(name, id) {
    return this.Temperament.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }
  async deleteOne(id) {
    return this.Temperament.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = TemperamentsService;
