import { Repository } from 'typeorm';

import { UserContact } from '../entity/userContact.entity';

class UserContactRepository extends Repository<UserContact> {
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
