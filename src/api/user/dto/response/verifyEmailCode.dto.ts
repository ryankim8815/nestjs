import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';
import { Code } from '../../../../database/entity/code.entity';

export default class VerifyEmailCodeDto {
  @ApiProperty({
    example: true,
  })
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  result: boolean;

  @ApiProperty({
    example: '이메일 인증코드가 일치합니다.',
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({ example: 'any', required: false })
  @IsOptional()
  @IsString()
  data: string;
}
