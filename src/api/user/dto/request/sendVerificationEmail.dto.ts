import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export default class SendVerificationEmailDto {
  @ApiProperty({
    example: 'test@test.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;
}
