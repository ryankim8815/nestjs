// 응용 프로그램의 루트 모듈입니다.

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigAsync } from './config/typeorm.config';
import { UserModule } from './api/user/user.module';
import configuration from './config/configuration';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfigAsync),
    UserModule,
  ],
  controllers: [AppController], // 소비자 등록
  providers: [AppService], // 공급자 등록
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
