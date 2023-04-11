import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Company } from './company.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'companyTag' })
export class CompanyTag {
  @PrimaryGeneratedColumn('uuid')
  companyTagId: string; // Primary Key uid (back data)

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @ManyToOne(() => Tag, { nullable: true })
  @JoinColumn({ name: 'tagId' })
  tag: Tag;
}
