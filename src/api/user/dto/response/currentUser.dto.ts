import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';
import { Timestamp } from 'typeorm';

export default class CurrentUserDto {
  @ApiProperty({
    example: 'uuid-asgawrgefsdv',
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'username',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: '123',
  })
  @IsNotEmpty()
  @IsString()
  userType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  userStatus: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isDeleted: boolean;

  @ApiProperty()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  updatedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  withdrawAt: Date;
}
