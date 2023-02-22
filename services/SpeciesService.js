class SpeciesService {
  constructor(db) {
    this.client = db.sequelize;
    this.Species = db.Species;
  }
  async getAll() {
    return this.Species.findAll({
      where: {},
    });
  }
}

module.exports = SpeciesService;
