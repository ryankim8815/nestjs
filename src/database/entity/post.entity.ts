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

@Entity({ name: 'post' })
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

  // /////////////////////////////
  // @ManyToOne(() => User, (user) => user.posts)
  // // @JoinColumn({ name: 'userId' })
  // user: User;
  // /////////////////////////////
  // @OneToMany(() => PostTag, (postTag) => postTag.post)
  // // @JoinColumn({ name: 'userId' })
  // postTags: PostTag[];
}
