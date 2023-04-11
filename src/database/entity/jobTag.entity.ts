import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Job } from './job.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'jobTag' })
export class JobTag {
  @PrimaryGeneratedColumn('uuid')
  jobTagId: string; // Primary Key uid (back data)

  @ManyToOne(() => Job)
  @JoinColumn({ name: 'jobId' })
  job: Job;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'tagId' })
  tag: Tag;
}
