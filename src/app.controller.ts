// 단일 경로가 있는 기본 컨트롤러.

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // [AppController는 소비자]
  constructor(private readonly appService: AppService) {} // 생성자로 초기화, [appService는 제품],

  @Get()
  getHello(): string {
    return this.appService.getHello(); // [appService라는 제품을 소비자의 입장에서 사용하는 것], 위에서 인자로 받은 appService를 초기화 없이 바로 사용
  }
}
