import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export default class NodeMailerUtil {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    const config = configService.get('Environment.nodeMailer[0]');

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.emailAccount,
        pass: config.appPassword,
      },
    });
  }

  async sendEmail(
    email: string, // 이메일 주소 검증 필요
  ) {
    try {
      const generateCode = () => {
        const code = Math.floor(Math.random() * 10000).toString();
        return code.padStart(4, '0'); // 4자리 숫자가 아니면 앞에 0을 추가해 4자리로 만듦
      };
      const code = generateCode();
      const info = await this.transporter.sendMail({
        from: `"Dog Foot 👻" <dogfoot.info@gmail.com>`, // sender address
        to: email, // list of receivers
        subject: '인증코드 발송', // 이메일 제목
        text: `인증코드는 ${code}입니다.`, // 이메일 내용
      });

      return code;
    } catch (error) {
      throw new Error('Can not send email. Error message: ' + error);
    }
  }
}
