import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';

@Entity({ name: 'resumeExperience' })
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

  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resumeId' })
  resume: Resume;
}
