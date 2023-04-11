import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { ResumeTag } from './resumeTag.entity';

@Entity({ name: 'resume' })
export class Resume {
  @PrimaryGeneratedColumn('uuid')
  resumeId: string;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'varchar',
  })
  content: string;

  @Column({
    type: 'varchar', // **set과 관련됭 차입을 사용해야함
  })
  tag: string;

  @Column({
    type: 'boolean', // 0: 비공개, 1: 공개
  })
  public: boolean;

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

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
  // @OneToMany(() => ResumeTag, (resumeTag) => resumeTag.resume)
  // resumeTags: ResumeTag[];
}
