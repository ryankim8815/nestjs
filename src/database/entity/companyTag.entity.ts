import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Company } from './company.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'companyTag' }) // 테이블 이름
export class CompanyTag {
  @PrimaryGeneratedColumn('uuid')
  companyTagId: string; // Primary Key uid (back data)

  /**
   * 1 : 1 관계 설정
   * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
   *              하나의 유저는 하나의 개인정보를 갖는다.
   */
  @ManyToOne(() => Company, (company) => company.companyTags)
  company: Company;
  @ManyToOne(() => Tag, (tag) => tag.postTags)
  tag: Tag;
}
