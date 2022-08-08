import { Injectable } from '@nestjs/common';
import connection from '../../repositories/userDatabaseConnection'
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
class UserDatabase {
    public async createUser(user: User): Promise<User> {
        await connection.insert(user).table('USUARIO');
        return await this.findOne(user.cpf);
    }
    public async findAll():Promise<User[]>{
        return await connection.select('*').from('USUARIO');
    }
    public async findOne(cpf: number):Promise<User>{
        const users = await connection.select('*').from('USUARIO').where({cpf:cpf});
        for(let user of users ){
            return user;
        }
    }
}

export default new UserDatabase();