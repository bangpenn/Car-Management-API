import { Model } from 'objection';

class User extends Model {
  static tableName = 'users';

  id!: number;
  username!: string;
  password!: string;
  role!: string;
  created_at?: string;
  updated_at?: string;
}

export default User;
