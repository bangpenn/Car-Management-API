// src/services/OrderService.ts
import OrderRepository from '../repositories/OrderRepository';
import Order from '../models/Order';

class OrderService {
  async createOrder(data: Partial<Order>, userId: string): Promise<Order> {
    return await OrderRepository.createOrder({ ...data, created_by: userId });
  }

  async getAllOrders(): Promise<Order[]> {
    return await OrderRepository.getAllOrders();
  }

  async getOrderById(id: string): Promise<Order | undefined> {
    return await OrderRepository.getOrderById(id);
  }

  async updateOrder(id: string, data: Partial<Order>, userId: string): Promise<Order> {
    return await OrderRepository.updateOrder(id, { ...data, updated_by: userId });
  }

  async deleteOrder(id: string, userId: string): Promise<void> {
    await OrderRepository.deleteOrder(id, userId);
  }
}

export default new OrderService();
