// src/controllers/OrderController.ts
import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export class OrderController {
  static async createOrder(req: Request, res: Response) {
    try {
      const order = await OrderService.createOrder(req.body, req.user!.id);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getOrderById(req: Request, res: Response) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updateOrder(req: Request, res: Response) {
    try {
      const order = await OrderService.updateOrder(req.params.id, req.body, req.user!.id);
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async deleteOrder(req: Request, res: Response) {
    try {
      await OrderService.deleteOrder(req.params.id, req.user!.id);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
