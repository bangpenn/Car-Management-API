// src/controllers/UserController.ts
import { Request, Response } from 'express';
import UserService from '../services/UserService';

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { username, password, role } = req.body;
      const user = await UserService.registerUser(username, password, role);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const token = await UserService.loginUser(username, password);
      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getCurrentUser(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(req.user!.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
