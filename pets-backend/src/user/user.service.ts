import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLogin } from './dto/user-login.dto';
import { User } from './entities/user.entity';
import { UserDatabase } from './repository/UserDatabase';
@Injectable()
export class UserService {

  constructor(private userRepositorio: UserDatabase){}
  
  async create(createUser: CreateUserDto): Promise<User> {
    const criadoEm = new Date().toISOString();
    const novoUsuario: User = {
      ...createUser,
      criadoEm: criadoEm,
    };
    return await this.userRepositorio.createUser(novoUsuario);
  }

  async login(loginData: UserLogin){
    return await this.userRepositorio.findByEmailAndPassword(loginData);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepositorio.findAll();
  }

  findOne(cpf: number) {
    return this.userRepositorio.findOne(cpf);
  }
}
