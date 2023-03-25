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

@Entity({ name: 'resume' }) // 테이블 이름
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

  /**
   * 1 : 1 관계 설정
   * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
   *              하나의 유저는 하나의 개인정보를 갖는다.
   */
  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
  @OneToMany(() => ResumeTag, (resumeTag) => resumeTag.resume)
  resumeTags: ResumeTag[];
}
