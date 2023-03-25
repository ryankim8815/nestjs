import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'postTag' }) // 테이블 이름
export class UserTag {
  @PrimaryGeneratedColumn('uuid')
  userTagId: string; // Primary Key uid (back data)

  /**
   * 1 : 1 관계 설정
   * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
   *              하나의 유저는 하나의 개인정보를 갖는다.
   */
  @ManyToOne(() => User, (user) => user.userTags)
  user: User;
  @ManyToOne(() => Tag, (tag) => tag.postTags)
  tag: Tag;
}
