import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entity/user.entity';
import { Code } from '../../database/entity/code.entity';
import * as UserDto from './user.dto';
import NodeMailerUtil from '../../utils/nodeMailer';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Code) private codeRepository: Repository<Code>,
    private nodeMailerUtil: NodeMailerUtil,
  ) {}

  // test용
  async findAll() {
    const userList: User[] = await this.userRepository.find();
    const resultSuccess = {
      result: true,
      message: '성공',
      data: userList,
    };
    return resultSuccess;
  }

  // 자체 회원가입을 위한 이메일 인증번호 전송
  async sendVerificationEmail(
    email: string,
  ): Promise<UserDto.Response.SendVerificationEmailDto> {
    try {
      const isNewEmailOnUser: User = await this.userRepository.findOneBy({
        email: email,
      });

      // 가입된 이메일이 있을 경우
      if (isNewEmailOnUser) {
        const resultExistedUser: UserDto.Response.SendVerificationEmailDto = {
          result: false,
          message: '이미 가입된 이메일입니다.',
          data: null,
        };
        return resultExistedUser;
      }
      const code: string = await this.nodeMailerUtil.sendEmail(email);
      const isExistEmailOnCode: Code = await this.codeRepository.findOneBy({
        email: email,
      });

      // 이메일 인증번호가 이미 존재할 경우 - 수정
      if (isExistEmailOnCode) {
        await this.codeRepository.update(
          { email },
          {
            isDeleted: false,
            code,
          },
        );
      }

      // 이메일 인증번호가 존재하지 않을 경우(null) - 생성
      if (!isExistEmailOnCode) {
        await this.codeRepository.save({
          email,
          code,
          ip: 'use middleware',
          isDeleted: false,
        });
      }

      const codeData: Code = await this.codeRepository.findOneBy({ email });
      const resultSuccess: UserDto.Response.SendVerificationEmailDto = {
        result: true,
        message: '이메일 인증번호 전송 성공',
        data: codeData.updatedAt,
      };
      return resultSuccess;
    } catch (error: any) {
      const resultCatchError: UserDto.Response.SendVerificationEmailDto = {
        result: false,
        message: '이메일 인증번호 전송 실패',
        data: error,
      };
      return resultCatchError;
    }
  }

  // 자체 회원가입을 위한 입력받은 이메일 인증번호 검증
  async verifyEmailCode(
    email: string,
    code: string,
  ): Promise<UserDto.Response.VerifyEmailCodeDto> {
    try {
      const isCorrectCode: Code = await this.codeRepository.findOneBy({
        code,
        email,
      });
      // 인증번호가 일치할 경우
      if (isCorrectCode) {
        await this.codeRepository.update(
          { email, code },
          {
            isDeleted: true,
          },
        );
        const resultSuccess: UserDto.Response.VerifyEmailCodeDto = {
          result: true,
          message: '이메일 인증코드가 일치합니다.',
          data: null,
        };
        return resultSuccess;
      }
      if (!isCorrectCode) {
        const resultIncorrectCode: UserDto.Response.VerifyEmailCodeDto = {
          result: false,
          message: '이메일 인증코드가 일치하지 않습니다.',
          data: null,
        };
        return resultIncorrectCode;
      }
    } catch (error) {
      const resultCatchError: UserDto.Response.VerifyEmailCodeDto = {
        result: false,
        message: '이메일 인증코드 확인 실패',
        data: error,
      };
      return resultCatchError;
    }
  }

  // 자체 회원가입을 위한 닉네임 중복 검사
  async checkNicknameDuplication(
    nickname: string,
  ): Promise<UserDto.Response.VerifyEmailCodeDto> {
    try {
      const isDuplicatedNickname: User = await this.userRepository.findOneBy({
        nickname,
      });
      // 중복된 닉네임인 경우
      if (isDuplicatedNickname) {
        const resultSuccess: UserDto.Response.VerifyEmailCodeDto = {
          result: false,
          message: '중복된 닉네임입니다.',
          data: null,
        };
        return resultSuccess;
      }
      if (!isDuplicatedNickname) {
        const resultSuccess: UserDto.Response.VerifyEmailCodeDto = {
          result: true,
          message: '사용 가능한 닉네임입니다.',
          data: null,
        };
        return resultSuccess;
      }
    } catch (error) {
      const resultCatchError: UserDto.Response.VerifyEmailCodeDto = {
        result: false,
        message: '닉네임 중복 확인 실패',
        data: error,
      };
      return resultCatchError;
    }
  }

  // 자체 회원가입 정보 DB 저장
  async registerUser(
    body: UserDto.Request.RegisterUserDto,
  ): Promise<UserDto.Response.RegisterUserDto> {
    try {
      const password = await bcrypt.hash(body.password, 10);
      // password = await bcrypt.hash(password, 10);

      const registerUser: User = await this.userRepository.save({
        email: body.email,
        password,
        nickname: body.nickname,
      });

      const resultSuccess: UserDto.Response.RegisterUserDto = {
        result: true,
        message: '성공적으로 회원가입 되었습니다.',
        data: registerUser,
      };

      return resultSuccess;
    } catch (error) {
      if (
        error.detail === `Key (nickname)=(${body.nickname}) already exists.`
      ) {
        const resultCatchError: UserDto.Response.RegisterUserDto = {
          result: false,
          message: '이미 존재하는 닉네임입니다.',
          data: error.detail,
        };
        return resultCatchError;
      }
      if (error.detail === `Key (email)=(${body.email}) already exists.`) {
        const resultCatchError: UserDto.Response.RegisterUserDto = {
          result: false,
          message: '이미 존재하는 이메일입니다.',
          data: error.detail,
        };
        return resultCatchError;
      }
      const resultCatchError: UserDto.Response.RegisterUserDto = {
        result: false,
        message: '회원가입 실패',
        data: error.detail ?? error,
      };
      return resultCatchError;
    }
  }
}
