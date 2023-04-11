import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';
import { Code } from '../../../../database/entity/code.entity';

export default class SendVerificationEmailDto {
  @ApiProperty({
    example: true,
  })
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  result: boolean;

  @ApiProperty({
    example: '이메일 인증번호 전송 성공',
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({ example: 'any', required: false })
  @IsOptional()
  @IsString()
  data: string | Date;
}
