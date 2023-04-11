import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export default class CurrentUserDto {
  @ApiProperty({
    example: '123',
  })
  @IsNotEmpty()
  @IsString()
  userId: string;
}
