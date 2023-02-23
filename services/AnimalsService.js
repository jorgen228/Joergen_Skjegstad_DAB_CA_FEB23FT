const { Op, Sequelize } = require("sequelize");
class AnimalsService {
  constructor(db) {
    this.client = db.sequelize;
    this.Animal = db.Animal;
    this.Temperament = db.Temperament;
    this.AnimalTemp = db.AnimalTemp;
    this.Species = db.Species;
  }
  async getAll() {
    return this.Animal.findAll({
      include: [
        {
          model: this.Species,
          required: true,
        },
        {
          model: this.Temperament,
          required: true
        },
      ],
      order: ["id"],
    });
  }
}

module.exports = AnimalsService;
