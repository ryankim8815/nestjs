import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'userContact' }) // 테이블 이름
export class UserContact {
  @PrimaryGeneratedColumn('uuid')
  userContactId: string; // Primary Key uid (back data)

  @Column({
    type: 'int',
  })
  countryCode: number;

  @Column({
    type: 'varchar',
  })
  email: string;

  @Column({
    type: 'boolean', // 0: 삭제아님, 1: 삭제됨
  })
  isDeleted: boolean;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  /**
   * 1 : 1 관계 설정
   * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
   *              하나의 유저는 하나의 개인정보를 갖는다.
   */
  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
