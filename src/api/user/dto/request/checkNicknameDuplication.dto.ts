import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export default class CheckNicknameDuplication {
  @ApiProperty({
    example: 'nickname',
  })
  @IsNotEmpty()
  @IsString()
  nickname: string;
}
