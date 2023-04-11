import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

class UserRepository extends Repository<User> {
  async findOneByEmail(email: string): Promise<User> {
    const user: User = await this.findOneBy({ email });

    return user;
  }
  async getUserByUserId(userId: string): Promise<User> {
    const user: User = await this.findOneBy({ userId: userId });

    return user;
  }
}

export default UserRepository;
