// src/controllers/CarController.ts
import { Request, Response } from 'express';
import CarService from '../services/CarService';

export class CarController {
  static async createCar(req: Request, res: Response) {
    try {
      const car = await CarService.createCar(req.body, req.user!.id);
      res.status(201).json(car);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getAllCars(req: Request, res: Response) {
    try {
      const cars = await CarService.getAllCars();
      res.status(200).json(cars);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getCarById(req: Request, res: Response) {
    try {
      const car = await CarService.getCarById(req.params.id);
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: 'Car not found' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updateCar(req: Request, res: Response) {
    try {
      const car = await CarService.updateCar(req.params.id, req.body, req.user!.id);
      res.status(200).json(car);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async deleteCar(req: Request, res: Response) {
    try {
      await CarService.deleteCar(req.params.id, req.user!.id);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
