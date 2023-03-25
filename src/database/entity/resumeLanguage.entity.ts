import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';

@Entity({ name: 'resumeLanguage' }) // 테이블 이름
export class ResumeLanguage {
  @PrimaryGeneratedColumn('uuid')
  resumeLanguageId: string;

  @Column({
    type: 'enum',
    enum: [
      'Korean',
      'English',
      'Japanese',
      'Chinese',
      'Indonesian',
      'Malaysian',
      'French',
      'German',
    ],
  })
  language: string;

  @Column({
    type: 'enum',
    enum: ['Native', 'Fluent', 'Intermediate', 'Beginner'],
  })
  level: string;

  @Column({
    type: 'varchar',
  })
  description: string;

  /**
   * N : 1 관계 설정
   * @ManyToOne -> 해당 엔티티(ResumeCareer) To 대상 엔티티(Resume)
   *              여러개의 ResumeCareer는 하나의 ResumeId를 갖는다.
   */
  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resumeId' })
  user: Resume;
}
