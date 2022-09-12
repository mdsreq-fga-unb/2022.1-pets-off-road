import { Injectable } from '@nestjs/common';
import { CreateAnimalVaccineDto } from './dto/create-animal_vaccine.dto';
import { AnimalVaccineDatabase } from './repository/AnimalVaccineDatabase';


@Injectable()
export class AnimalVaccineService {
  constructor(private animalVaccineRepo: AnimalVaccineDatabase){}
  create(createAnimalVaccineDto: CreateAnimalVaccineDto) {
    return this.animalVaccineRepo.createAnimalVaccine(createAnimalVaccineDto);
  }

  findAll() {
    return this.animalVaccineRepo.getAll();
  }
}
