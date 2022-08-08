import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import repo from './repository/userRepo';

@Injectable()
export class UserService {
  async create(createUser: CreateUserDto): Promise<User> {
    const criadoEm = new Date().toISOString();
    const novoUsuario: User = {
      ...createUser,
      criadoEm: criadoEm,
    };
    return await repo.createUser(novoUsuario);
  }

  async findAll(): Promise<User[]> {
    return await repo.findAll();
  }

  findOne(cpf: number) {
    return repo.findOne(cpf);
  }
}
