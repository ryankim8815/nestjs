import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';

@Entity({ name: 'resumeCareer' })
export class ResumeCareer {
  @PrimaryGeneratedColumn('uuid')
  resumeCareerId: string;

  @Column({
    type: 'varchar',
  })
  campanyName: string;

  @Column({
    type: 'varchar',
  })
  jobTitle: string;

  @Column({
    type: 'varchar',
  })
  jobDescription: string;

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
