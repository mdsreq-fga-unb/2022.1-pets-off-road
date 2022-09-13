import connection from '../../repositories/DatabaseConnection';
import { CreateAnimalVaccineDto } from '../dto/create-animal_vaccine.dto';
import { AnimalVaccine } from '../entities/animal_vaccine.entity';

export class AnimalVaccineDatabase {
    public async createAnimalVaccine(createAnimalVaccine: CreateAnimalVaccineDto) {
        return await connection.insert(createAnimalVaccine).table('animal_vaccine');
    }

    public async getByAnimalId(animalId: number): Promise <AnimalVaccine[]> {
        return await connection.select().from('animal_vaccine').where({matricula_animal: animalId})
    }

    public async getAll(): Promise <AnimalVaccine[]> {
        return await connection.select().table('animal_vaccine');
    }
}