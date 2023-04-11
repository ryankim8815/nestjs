import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as UserDto from './user.dto';

import {
  ApiBody,
  ApiParam,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('유저 관련 api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: '(테스트용)전체 유저 정보 가져오기',
    description: '전체 유저 정보를 확인하기 위해 호출',
  })
  @ApiBody({
    description: `요청에 필요한 값 없음`,
  })
  @ApiCreatedResponse({
    description: `jason array 형태로 유저 정보 반환`,
  })
  @Get()
  async allUser() {
    return await this.userService.findAll();
  }

  @Get('/register/email/:email/code')
  @ApiOperation({
    summary: '자체 회원가입을 위한 이메일 인증번호 발송',
    description: '이메일 인증번호 발송을 위해 호출',
  })
  @ApiParam({
    name: 'email',
    description: `이메일 중복체크 및 인증번호 발송을 위한 이메일`,
    type: UserDto.Request.SendVerificationEmailDto,
  })
  @ApiCreatedResponse({
    description: `result: boolean,
    message: string,
    data: any,`,
    type: UserDto.Response.SendVerificationEmailDto,
  })
  async sendVerificationEmail(@Param('email') email: string) {
    return await this.userService.sendVerificationEmail(email);
  }

  @Get('/register/email/:email/code/:code')
  @ApiOperation({
    summary: '자체 회원가입을 위한 이메일 인증번호 입력값 검증',
    description: '이메일 인증번호 검증을 위해 호출',
  })
  @ApiParam({
    name: 'email, code',
    description: `인증번호를 수신받은 이메일, 입력한 인증번호`,
    type: UserDto.Request.VerifyEmailCodeDto,
  })
  @ApiCreatedResponse({
    description: `result: boolean,
    message: string,
    data: any,`,
    type: UserDto.Response.VerifyEmailCodeDto,
  })
  async verifyEmailCode(
    @Param('email') email: string,
    @Param('code') code: string,
  ) {
    return await this.userService.verifyEmailCode(email, code);
  }

  @Get('/register/nickname/:nickname')
  @ApiOperation({
    summary: '자체 회원가입을 위한 닉네임 중복체크',
    description: '닉네임 중복체크를 위해 호출',
  })
  @ApiParam({
    name: 'nickname',
    description: `닉네임 중복체크를 위한 닉네임`,
    type: UserDto.Request.CheckNicknameDuplicationDto,
  })
  @ApiCreatedResponse({
    description: `result: boolean,
    message: string,
    data: any,`,
    type: UserDto.Response.CheckNicknameDuplicationDto,
  })
  async checkNicknameDuplication(@Param('nickname') nickname: string) {
    return await this.userService.checkNicknameDuplication(nickname);
  }

  @Post('/register')
  @ApiOperation({
    summary: '자체 회원가입 완료를 위한 POST 요청',
    description: '회원가입을 위해 호출',
  })
  @ApiBody({
    description: `
    email: 'test@gmail.com',
    password: 'password',
    nickname: 'nickname',`,
    type: UserDto.Request.RegisterUserDto,
  })
  @ApiCreatedResponse({
    description: `result: boolean,
    message: string,
    data: any,`,
    type: UserDto.Response.RegisterUserDto,
  })
  async registerUser(@Body() body: UserDto.Request.RegisterUserDto) {
    return await this.userService.registerUser(body);
  }
}
