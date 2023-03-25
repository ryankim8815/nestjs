import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('유저 관련 api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }
  // @Post()
  // // create(@Body() createUserDto: CreateUserDto) {
  // create(@Body() id: number, firstName: string, lastName: string) {
  //   // return this.usersService.create(createUserDto);
  //   return this.usersService.create(id, firstName, lastName);
  // }

  // next.js처럼 파일 트리가 Router 역할
  // http://localhost:5000/users/users == @Get('/users')
  // @Get('/test')
  // test() {
  //   // return 'test success~!';
  //   return this.usersService.test();
  // }

  @ApiOperation({
    summary: '전체 유저 정보 가져오기',
    description: '전체 유저 정보를 확인하기 위해 호출',
  })
  @ApiBody({
    description: `요청에 필요한 값 없음`,
    // type: InfoDto.StationSignInRequest,
  })
  @ApiCreatedResponse({
    description: `returnCode : 0(성공 또는 실패번호)  
      returnMessage : 관련 메세지`,
    // type: InfoDto.StationSignInResponse,
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({
    summary: 'userId로 조회된 유저 정보 가져오기',
    description: '특정 유저 정보를 확인하기 위해 호출',
  })
  @ApiBody({
    description: `요청에 필요한 값 없음`,
    // type: InfoDto.StationSignInRequest,
  })
  @ApiCreatedResponse({
    description: `returnCode : 0(성공 또는 실패번호)  
    returnMessage : 관련 메세지`,
    // type: InfoDto.StationSignInResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
