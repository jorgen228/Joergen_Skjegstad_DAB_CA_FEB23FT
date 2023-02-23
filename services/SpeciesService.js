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
  async updateOne(newName, id) {
    return this.Species.update(
      {
        name: newName,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }
  async deleteOne(id) {
    return this.Species.destroy({
      where: {
        id: id,
      },
    });
  }
  async create(name) {
    return this.Species.create({
      name: name,
    });
  }
}

module.exports = SpeciesService;
