// src/services/CarService.ts
import CarRepository from '../repositories/CarRepository';
import Car from '../models/Car';

class CarService {
  async createCar(data: Partial<Car>, userId: string): Promise<Car> {
    return await CarRepository.createCar({ ...data, created_by: userId });
  }

  async getAllCars(): Promise<Car[]> {
    return await CarRepository.getAllCars();
  }

  async getCarById(id: string): Promise<Car | undefined> {
    return await CarRepository.getCarById(id);
  }

  async updateCar(id: string, data: Partial<Car>, userId: string): Promise<Car> {
    return await CarRepository.updateCar(id, { ...data, updated_by: userId });
  }

  async deleteCar(id: string, userId: string): Promise<void> {
    await CarRepository.deleteCar(id, userId);
  }
}

export default new CarService();
