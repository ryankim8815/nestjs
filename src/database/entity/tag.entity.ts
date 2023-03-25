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

@Entity({ name: 'tag' }) // 테이블 이름
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

  /**
   * 1 : 1 관계 설정
   * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
   *              하나의 유저는 하나의 개인정보를 갖는다.
   */
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => CompanyTag, (companyTag) => companyTag.tag)
  companyTags: CompanyTag[];
  @OneToMany(() => PostTag, (postTag) => postTag.tag)
  postTags: PostTag[];
  @OneToMany(() => UserTag, (userTag) => userTag.tag)
  userTags: UserTag[];
  @OneToMany(() => JobTag, (jobTag) => jobTag.tag)
  jobTags: JobTag[];
}
