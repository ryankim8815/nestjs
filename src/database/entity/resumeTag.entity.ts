import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'resumeTag' }) // 테이블 이름
export class ResumeTag {
  @PrimaryGeneratedColumn('uuid')
  resumeTagId: string; // Primary Key uid (back data)

  /**
   * 1 : 1 관계 설정
   * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
   *              하나의 유저는 하나의 개인정보를 갖는다.
   */
  @ManyToOne(() => Resume, (resume) => resume.resumeTags)
  resume: Resume;
  @ManyToOne(() => Tag, (tag) => tag.jobTags)
  tag: Tag;
}
