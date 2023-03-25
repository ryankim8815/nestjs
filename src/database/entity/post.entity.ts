import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { PostTag } from './postTag.entity';

@Entity({ name: 'post' }) // 테이블 이름
export class Post {
  @PrimaryGeneratedColumn('uuid')
  postId: string; // Primary Key uid (back data)

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

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
  @ManyToOne(() => User, (user) => user.posts)
  // @JoinColumn({ name: 'userId' })
  user: User;
  @OneToMany(() => PostTag, (postTag) => postTag.post)
  // @JoinColumn({ name: 'userId' })
  postTags: PostTag[];
}
