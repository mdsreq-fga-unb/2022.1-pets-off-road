import connection from '../../repositories/DatabaseConnection';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserLogin } from '../dto/user-login.dto';
import { User } from '../entities/user.entity';

export class UserDatabase {
  public table_name = 'user';

  public async createUser(user: CreateUserDto): Promise<User> {
    await connection.insert(user).table(this.table_name);
    return await this.findOne(user.cpf);
  }

  public async findAll(): Promise<User[]> {
    return await connection.select('*').from(this.table_name);
  }

  public async findOne(cpf: string): Promise<User> {
    const users = await connection
      .select('*')
      .from(this.table_name)
      .where({ cpf: cpf });
    for (const user of users) {
      return user;
    }
  }

  public async findByEmailAndPassword(loginData: UserLogin): Promise<User> {
    return (await connection
      .select()
      .from(this.table_name)
      .where({ email: loginData.email, senha: loginData.senha }))[0];
  }
}
