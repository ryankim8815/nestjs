import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export default class CheckNicknameDuplication {
  @ApiProperty({
    example: true,
  })
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  result: boolean;

  @ApiProperty({
    example: '사용 가능한 닉네임입니다.',
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({ example: 'any', required: false })
  @IsOptional()
  @IsString()
  data: string;
}
