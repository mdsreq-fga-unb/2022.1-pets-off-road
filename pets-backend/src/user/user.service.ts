import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { isEmail } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLogin } from './dto/user-login.dto';
import { User } from './entities/user.entity';
import { UserDatabase } from './repository/UserDatabase';
import * as jwt from 'jsonwebtoken';
import { ResponseLogin } from './dto/responseLogin.dto';
@Injectable()
export class UserService {
  constructor(private userRepositorio: UserDatabase) {}

  public create = async (createUser: CreateUserDto): Promise<User> => {
    if(!this.validateCpf(createUser.cpf))
      throw new BadRequestException({
        err: HttpStatus.BAD_REQUEST,
        mesage: 'not-a-valid-format-to-cpf',
      });

    if(!this.validateEmail(createUser.email))
      throw new BadRequestException({
        err: HttpStatus.BAD_REQUEST,
        mesage: 'not-a-valid-format-to-email',
      });

    return await this.userRepositorio.createUser(createUser);
  };

  public login = async (loginData: UserLogin): Promise<ResponseLogin> => {
    this.validateEmail(loginData.email);
    const user = await this.userRepositorio.findByEmailAndPassword(loginData);
    if (!user)
      throw new BadRequestException('dados incorretos')
    
    return {
      sessionToken: jwt.sign(user, 'secret-key-temporaria', {expiresIn: 60})
    };
  };

  public findAll = async (): Promise<User[]> => {
    return await this.userRepositorio.findAll();
  };

  public findOne = async (cpf: string) => {
    this.validateCpf(cpf);
    return this.userRepositorio.findOne(cpf);
  };

  public validateCpf = (cpfToValidate: string): boolean => {
    return cpf.isValid(String(cpfToValidate))? true : false
  };

  public validateEmail = (email: string): boolean => {
    return isEmail(email)? true : false
  };
}
