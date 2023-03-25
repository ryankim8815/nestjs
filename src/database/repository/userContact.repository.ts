import { Repository } from 'typeorm';

import { UserContact } from '../entity/userContact.entity';

class UserContactRepository extends Repository<UserContact> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성
  async getUserContactByUserContactId(
    userContactId: string,
  ): Promise<UserContact> {
    const userContact = await this.findOneBy({
      userContactId: userContactId,
    });

    return userContact;
  }
}

export default UserContactRepository;
