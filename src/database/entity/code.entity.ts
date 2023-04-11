import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'code' })
export class Code {
  @PrimaryGeneratedColumn('uuid')
  codeId: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  code: string;

  @Column({
    type: 'varchar',
  })
  ip: string;

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
}
