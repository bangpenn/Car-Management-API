// src/repositories/CarRepository.ts
import Car from '../models/Car';

class CarRepository {
  async createCar(data: Partial<Car>): Promise<Car> {
    return await Car.query().insert(data);
  }

  async getAllCars(): Promise<Car[]> {
    return await Car.query()
      .whereNull('deleted_at')
      .withGraphFetched('[creator, updater, deleter]');
  }

  async getCarById(id: string): Promise<Car | undefined> {
    return await Car.query()
      .findById(id)
      .whereNull('deleted_at')
      .withGraphFetched('[creator, updater, deleter]');
  }

  async updateCar(id: string, data: Partial<Car>): Promise<Car> {
    return await Car.query()
      .patchAndFetchById(id, data)
      .withGraphFetched('[creator, updater, deleter]');
  }

  async deleteCar(id: string, deletedBy: string): Promise<void> {
    await Car.query().patchAndFetchById(id, {
      deleted_at: new Date().toISOString(),
      deleted_by: deletedBy
    });
  }
}

export default new CarRepository();
