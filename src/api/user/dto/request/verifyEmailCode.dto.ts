import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export default class VerifyEmailCodeDto {
  @ApiProperty({
    example: 'test@test.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: '0123',
  })
  @IsNotEmpty()
  @IsString()
  code: string;
}
