import connection from '../../repositories/DatabaseConnection';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { Animal } from '../entities/animal.entity';
export class AnimalDatabase {
  public async createAnimal(animal: CreateAnimalDto) {
    return await connection.insert(animal).table('animal');
  }

  public async listOfAnimals() {
    return await connection.select().table('animal');
  }
}
