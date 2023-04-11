import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';
import { User } from '../../../../database/entity/user.entity';

export default class RegisterUserDto {
  @ApiProperty({
    example: true,
  })
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  result: boolean;

  @ApiProperty({
    example: '성공적으로 회원가입 되었습니다.',
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({ example: 'any', required: false })
  @IsOptional()
  @IsString()
  data: string | User;
}
