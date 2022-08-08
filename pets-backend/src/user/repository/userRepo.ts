import connection from '../../repositories/userDatabaseConnection';
import { UserLogin } from '../dto/user-login.dto';
import { User } from '../entities/user.entity';
class UserDatabase {
  public async createUser(user: User): Promise<User> {
    await connection.insert(user).table('USUARIO');
    return await this.findOne(user.cpf);
  }
  public async findAll(): Promise<User[]> {
    return await connection.select('*').from('USUARIO');
  }
  public async findOne(cpf: number): Promise<User> {
    const users = await connection
      .select('*')
      .from('USUARIO')
      .where({ cpf: cpf });
    for (const user of users) {
      return user;
    }
  }
  public async findByEmailAndPassword(loginData: UserLogin): Promise<User[]>{
    return await connection.select('*').from('USUARIO').where({email:loginData.email, senha: loginData.senha})
  }
}

export default new UserDatabase();
