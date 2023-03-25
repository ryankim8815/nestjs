import { Repository } from 'typeorm';

import { User } from '../entity/User.entity';

class UserRepository extends Repository<User> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성

  async getUserByUserId(userId: string): Promise<User> {
    const user: User = await this.findOneBy({ userId: userId });

    return user;
  }
}

export default UserRepository;
