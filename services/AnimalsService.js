class AnimalsService {
  constructor(db) {
    this.client = db.sequelize;
    this.Animal = db.Animal;
    this.Temperament = db.Temperament;
  }
  async getAll() {
    return this.Animal.findAll({
      where: {},
    });
  }
}

module.exports = AnimalsService;
