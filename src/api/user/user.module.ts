import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entity/user.entity';
import { Code } from '../../database/entity/code.entity';
import NodeMailerUtil from 'src/utils/nodeMailer';
import UserRepository from 'src/database/repository/user.repository';
import CodeRepository from 'src/database/repository/code.repository';
import { Tag } from 'src/database/entity/tag.entity';

@Module({
  // 관계가 맺어져 있는 엔티티를 모두 등록해야 한다.
  imports: [TypeOrmModule.forFeature([User, Code, Tag])],
  controllers: [UserController], // 소비자 등록
  providers: [UserService, NodeMailerUtil, UserRepository, CodeRepository], // 사업자 등록
  exports: [UserService], // 캡슐화 되어있던 UserService를 외부에서 사용할 수 있도록 exports에 추가
})
export class UserModule {}
