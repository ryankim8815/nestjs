import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Resume } from './resume.entity';

@Entity({ name: 'resumeCareer' }) // 테이블 이름
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

  /**
   * N : 1 관계 설정
   * @ManyToOne -> 해당 엔티티(ResumeCareer) To 대상 엔티티(Resume)
   *              여러개의 ResumeCareer는 하나의 ResumeId를 갖는다.
   */
  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resumeId' })
  user: Resume;
}
