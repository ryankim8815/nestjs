import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { CompanyTag } from './companyTag.entity';
import { PostTag } from './postTag.entity';
import { UserTag } from './userTag.entity';
import { JobTag } from './jobTag.entity';

@Entity({ name: 'tag' })
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  tagId: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'boolean', // 0: 삭제아님, 1: 삭제됨 (금지어)
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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  // @OneToMany(() => CompanyTag, (companyTag) => companyTag.tag)
  // companyTags: CompanyTag[];
  // @OneToMany(() => PostTag, (postTag) => postTag.tag)
  // postTags: PostTag[];
  // @OneToMany(() => UserTag, (userTag) => userTag.tag)
  // userTags: UserTag[];
  // @OneToMany(() => JobTag, (jobTag) => jobTag.tag)
  // jobTags: JobTag[];
}
