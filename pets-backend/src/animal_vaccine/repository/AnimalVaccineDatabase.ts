import connection from '../../repositories/DatabaseConnection';
import { CreateAnimalVaccineDto } from '../dto/create-animal_vaccine.dto';
import { AnimalVaccine } from '../entities/animal_vaccine.entity';

export class AnimalVaccineDatabase {
    public async createAnimalVaccine(createAnimalVaccine: CreateAnimalVaccineDto) {
        return await connection.insert(createAnimalVaccine).table('animal_vaccine');
    }

    public async get_A_V_unique(animal_vaccine: AnimalVaccine): Promise <AnimalVaccine> {
        const A_V = await connection.select().from('animal_vaccine').where({cod_vacina: animal_vaccine.cod_vacina, matricula_animal: animal_vaccine.matricula_animal});
        return A_V[0];
    }

    public async getAll(): Promise <AnimalVaccine[]> {
        return await connection.select().table('animal_vaccine');
    }
}