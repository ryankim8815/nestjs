import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Post } from './post.entity';
import { Code } from './Code.entity';
import { UserTag } from './userTag.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
    unique: true,
    length: 20,
  })
  nickname: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'employee', 'humanResource', 'headHunter'],
    default: 'employee',
  })
  userType: string;

  @Column({
    type: 'boolean', // 0: 구인/구직아님, 1: 구인/구직중
    default: false,
  })
  userStatus: boolean;

  @Column({
    type: 'boolean', // 0: 삭제아님, 1: 삭제됨
    default: false,
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

  @ManyToOne(() => Tag, { nullable: true })
  @JoinColumn({ name: 'tagId' })
  tag: Tag;
  //   @OneToOne(() => UserContact)
  //   @JoinColumn({ name: 'userContactId' })
  //   userContact: UserContact;
  // /////////////////////////////
  // @OneToMany(() => UserTag, (userTag) => userTag.user)
  // @JoinTable({ name: 'userTag' }) // 새로운 테이블의 이름을 정의해줌
  // userTags: UserTag[];
  // @OneToMany(() => Post, (post) => post.user)
  // posts: Post[];
  // /////////////////////////////
  // @OneToOne(() => Code, { cascade: true, eager: true })
  // @JoinColumn({ name: 'email', referencedColumnName: 'email' })
  // code: Code;

  // @OneToOne(() => Code, (code) => code.user)
  // code: Code;
}
