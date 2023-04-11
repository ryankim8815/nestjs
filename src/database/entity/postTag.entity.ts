import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Post } from './post.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'postTag' })
export class PostTag {
  @PrimaryGeneratedColumn('uuid')
  postTagId: string; // Primary Key uid (back data)

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'postId' })
  post: Post;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'tagId' })
  tag: Tag;
}
