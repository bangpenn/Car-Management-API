// src/repositories/OrderRepository.ts
import Order from '../models/Order';

class OrderRepository {
  async createOrder(data: Partial<Order>): Promise<Order> {
    return await Order.query().insert(data);
  }

  async getAllOrders(): Promise<Order[]> {
    return await Order.query()
      .whereNull('deleted_at')
      .withGraphFetched('[user, car, creator, updater, deleter]');
  }

  async getOrderById(id: string): Promise<Order | undefined> {
    return await Order.query()
      .findById(id)
      .whereNull('deleted_at')
      .withGraphFetched('[user, car, creator, updater, deleter]');
  }

  async updateOrder(id: string, data: Partial<Order>): Promise<Order> {
    return await Order.query()
      .patchAndFetchById(id, data)
      .withGraphFetched('[user, car, creator, updater, deleter]');
  }

  async deleteOrder(id: string, deletedBy: string): Promise<void> {
    await Order.query().patchAndFetchById(id, {
      deleted_at: new Date().toISOString(),
      deleted_by: deletedBy
    });
  }
}

export default new OrderRepository();
