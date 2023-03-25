import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { CompanyTag } from './companyTag.entity';

@Entity({ name: 'company' }) // 테이블 이름
export class Company {
  @PrimaryGeneratedColumn('uuid')
  companyId: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  logo: string;

  @Column({
    type: 'varchar',
  })
  address: string;

  @Column({
    type: 'varchar',
  })
  website: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: ['Company', 'HeadHunter'],
  })
  type: string;

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

  /**
   * 1 : 1 관계 설정
   * @OneToOne -> 해당 엔티티(User) To 대상 엔티티(UserContact)
   *              하나의 유저는 하나의 개인정보를 갖는다.
   */
  @OneToMany(() => CompanyTag, (companyTag) => companyTag.company)
  companyTags: CompanyTag[];
}
