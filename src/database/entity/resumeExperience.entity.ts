import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';

@Entity({ name: 'resumeExperience' }) // 테이블 이름
export class ResumeExperience {
  @PrimaryGeneratedColumn('uuid')
  resumeExperienceId: string;

  @Column({
    type: 'varchar',
  })
  organizationName: string;

  @Column({
    type: 'varchar',
  })
  experienceTitle: string;

  @Column({
    type: 'varchar',
  })
  experienceDescription: string;

  @Column({
    type: 'boolean', // 0: 진행중, 1: 완료
  })
  status: boolean;

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
   * @ManyToOne -> 해당 엔티티(ResumeExperience) To 대상 엔티티(Resume)
   *              여러개의 ResumeExperience는 하나의 ResumeId를 갖는다.
   */
  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resumeId' })
  user: Resume;
}
