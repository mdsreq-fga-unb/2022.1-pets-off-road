import { Injectable } from '@nestjs/common';
import { CreateAnimalVaccineDto } from './dto/create-animal_vaccine.dto';
import { AnimalVaccineDatabase } from './repository/AnimalVaccineDatabase';


@Injectable()
export class AnimalVaccineService {
  constructor(private animalVaccineRepo: AnimalVaccineDatabase){}
  async create(createAnimalVaccineDto: CreateAnimalVaccineDto) {
    return await this.animalVaccineRepo.createAnimalVaccine(createAnimalVaccineDto);
  }

  async findAll() {
    return await this.animalVaccineRepo.getAll();
  }

  async findByAnimalId(id: number){
    return await this.animalVaccineRepo.getByAnimalId(id);
  }
}
