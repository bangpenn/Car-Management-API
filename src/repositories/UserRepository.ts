import User from '../models/User';

class UserRepository {
  async createUser(data: Partial<User>): Promise<User> {
    return await User.query().insert(data);
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return await User.query().findOne({ username });
  }

  async findUserById(id: string): Promise<User | undefined> {
    return await User.query().findById(id);
  }
}

export default new UserRepository();
