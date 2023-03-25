// 응용 프로그램의 루트 모듈입니다.

import { Module } from '@nestjs/common';

// yaml - working
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigAsync } from './config/typeorm.config';
import { UsersModule } from './api/user/user.module';
// import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';
// import TypeOrmConfig from './config/typeorm.config';
// import { ConfigService } from '@nestjs/config';

// import DatabaseModule from './databaseConnection/database.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfigAsync),
    // DatabaseModule.register(),
    UsersModule,
    // DatabaseModule,
  ],
  controllers: [AppController], // 소비자 등록
  // providers: [AppService, ConfigService], // 공급자 등록
  providers: [AppService], // 공급자 등록
})
export class AppModule {}
