// src/models/Car.ts
import { Model, RelationMappings } from 'objection';
import User from './User';

class Car extends Model {
  static tableName = 'cars';

  id!: number;
  users_id!: number;
  name!: string;
  category!: string;
  price!: string;
  created_by!: string;
  deleted_by!: string;
  updated_by!: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;

  static get relationMappings(): RelationMappings {
    return {
      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'cars.created_by',
          to: 'users.id'
        }
      },
      updater: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'cars.updated_by',
          to: 'users.id'
        }
      },
      deleter: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'cars.deleted_by',
          to: 'users.id'
        }
      }
    };
  }
}

export default Car;
