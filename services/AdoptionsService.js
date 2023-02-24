class AdoptionsService {
  constructor(db) {
    this.client = db.sequelize;
    this.Adoption = db.Adoption;
  }
  async create(userId, animalId, dateOfAdoption) {
    return this.Adoption.create({
      UserId: userId,
      AnimalId: animalId,
      DateOfAdoption: dateOfAdoption,
    });
  }
  async destroyOne(animalId) {
    return this.Adoption.destroy({
      where: {
        AnimalId: animalId,
      },
    });
  }
}

module.exports = AdoptionsService;
