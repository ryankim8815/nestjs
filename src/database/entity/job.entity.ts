import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Company } from './company.entity';
import { JobPosition } from './jobPosition.entity';
import { JobBenefit } from './jobBenefit.entity';
import { JobTag } from './jobTag.entity';

@Entity({ name: 'job' })
export class Job {
  @PrimaryGeneratedColumn('uuid')
  jobId: string;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: ['permanent', 'fixedTerm', 'intern'],
  })
  contractType: string;

  @Column({
    type: 'int',
  })
  salary: number;

  @Column({
    type: 'varchar',
  })
  location: string; // 주소는 어떻게 할지 고민해보기(ex, api로 받아오기)

  @Column({
    type: 'enum',
    enum: ['Company', 'HeadHunter'],
  })
  type: string;

  @Column({
    type: 'enum',
    enum: [
      'Lunch provided',
      'Dinner provided',
      'Snacks provided',
      'Gym membership',
      'Free lunch',
      'Free dinner',
      'Free snacks',
      'Free gym membership',
      'None',
    ],
  })
  tag: string;

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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @ManyToOne(() => JobPosition)
  @JoinColumn({ name: 'jobPositionId' })
  jobPosition: JobPosition;

  // **set처럼 여러개 선택이 가능해야함 - 고민 필요
  @ManyToOne(() => JobBenefit)
  @JoinColumn({ name: 'jobBenefitId' })
  jobBenefit: JobBenefit;

  // @OneToMany(() => JobTag, (jobTag) => jobTag.job)
  // jobTags: JobTag[];
}
