import userDatabase from '../../repositories/userDatabaseConnection'
import { USER } from '../entities/user.entity';

export class USERDATABASE {
    public async createUser(user: USER): Promise<USER> {
        return await userDatabase.insert(user).table('USUARIO');
    }
}