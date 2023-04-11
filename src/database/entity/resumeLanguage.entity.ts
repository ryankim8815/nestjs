import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';

@Entity({ name: 'resumeLanguage' })
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

  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resumeId' })
  resume: Resume;
}
