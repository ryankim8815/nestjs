// 단일 메서드를 사용하는 기본 서비스입니다.

import { Injectable } from '@nestjs/common';

@Injectable() // 공급자 표시
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
