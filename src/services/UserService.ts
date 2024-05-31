// src/services/UserService.ts
import UserRepository from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserService {
  async registerUser(username: string, password: string, role: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await UserRepository.createUser({ username, password: hashedPassword, role });
  }

  async loginUser(username: string, password: string): Promise<string | null> {
    const user = await UserRepository.findUserByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.ACCESS_TOKEN_SECRET as string);
    return token;
  }

  async getUserById(id: string): Promise<any> {
    return await UserRepository.findUserById(id);
  }
}

export default new UserService();
