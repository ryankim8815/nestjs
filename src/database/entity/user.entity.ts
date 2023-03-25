import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Post } from './post.entity';
import { UserTag } from './userTag.entity';

@Entity({ name: 'user' }) // 테이블 이름
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
    unique: true,
    length: 20,
  })
  username: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'worker', 'humanResource', 'headHunter'],
  })
  userType: string;

  @Column({
    type: 'boolean', // 0: 구인/구직중, 1: 구인/구직완료
  })
  userStatus: boolean;

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

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  withdrawAt: Date;

  //   /**
  //    * 1 : 1 관계 설정
  //    * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
  //    *              하나의 유저는 하나의 개인정보를 갖는다.
  //    */
  //   @OneToOne(() => UserContact)
  //   @JoinColumn({ name: 'userContactId' })
  //   userContact: UserContact;
  @OneToMany(() => UserTag, (userTag) => userTag.user)
  userTags: UserTag[];
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
