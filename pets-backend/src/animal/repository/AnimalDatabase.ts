import connection from '../../repositories/DatabaseConnection';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { Animal } from '../entities/animal.entity';
export class AnimalDatabase {
  public async createAnimal(animal: object): Promise<number[]> {
    return await connection.insert(animal).table('animal');
  }

  public async listOfAnimals() {
    return await connection.select().table('animal');
  }

  public async listByProject(id: number){
    return await connection.select().table('animal').where({project_id: id})
  }

  public async listByid(id: number){
    return (await connection.select().table('animal').where({matricula: id}))[0]
  }

  public async update(animal: any, matricula: number){
    return await connection.table('animal').update({...animal}).where({matricula:matricula})
  }

}
