import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLogin } from './dto/user-login.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginData: UserLogin) {
    return this.userService.login(loginData);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') id: string) {
    return this.userService.findOne(+id);
  }
}
