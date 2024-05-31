// src/models/Order.ts
import { Model, RelationMappings } from 'objection';
import User from './User';
import Car from './Car';

class Order extends Model {
  static tableName = 'orders';

  id!: string;
  users_id!: string;
  cars_id!: string;
  car!: string;
  start_rent!: string;
  finish_rent!: string;
  price!: string;
  status!: string;
  created_by!: string;
  updated_by?: string;
  deleted_by?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;

  static get relationMappings(): RelationMappings {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.users_id',
          to: 'users.id'
        }
      },
      car: {
        relation: Model.BelongsToOneRelation,
        modelClass: Car,
        join: {
          from: 'orders.cars_id',
          to: 'cars.id'
        }
      },
      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.created_by',
          to: 'users.id'
        }
      },
      updater: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.updated_by',
          to: 'users.id'
        }
      },
      deleter: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.deleted_by',
          to: 'users.id'
        }
      }
    };
  }
}

export default Order;
