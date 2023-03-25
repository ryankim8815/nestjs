import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';

@Entity({ name: 'resumeEducation' }) // 테이블 이름
export class ResumeEducation {
  @PrimaryGeneratedColumn('uuid')
  resumeEducationId: string;

  @Column({
    type: 'enum',
    enum: [
      'associate',
      'highSchool',
      'college',
      'university',
      'graduate school',
      // 'bachelor',
      // 'master',
      // 'doctor',
    ],
  })
  schoolType: string;

  @Column({
    type: 'varchar',
  })
  schoolName: string;

  @Column({
    type: 'varchar',
  })
  major: string;

  @Column({
    type: 'enum',
    enum: ['inProgress', 'onLeave', 'graduated'],
  })
  status: string;

  @Column({
    type: 'timestamp',
  })
  startAt: Date;

  @Column({
    type: 'timestamp',
  })
  endAt: Date;

  /**
   * N : 1 관계 설정
   * @ManyToOne -> 해당 엔티티(ResumeEducation) To 대상 엔티티(Resume)
   *              여러개의 ResumeEducation는 하나의 ResumeId를 갖는다.
   */
  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resumeId' })
  resume: Resume;
}
