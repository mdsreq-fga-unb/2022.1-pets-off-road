import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLogin } from './dto/user-login.dto';
import { ResponseLogin } from './dto/responseLogin.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // No auth
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // No auth
  @Post('login')
  async login(@Body() loginData: UserLogin): Promise<ResponseLogin & User>{
    return this.userService.login(loginData);
  }

  //auth
  @Get()
  findAll(@Body('sessionToken') token: string) {
    // auth service
    return this.userService.findAll();
  }

  //auth
  @Get(':cpf')
  findOne(@Param('cpf') id: string, @Body('sessionToken') token: string) {
    // auth service
    return this.userService.findOne(id);
  }
}
