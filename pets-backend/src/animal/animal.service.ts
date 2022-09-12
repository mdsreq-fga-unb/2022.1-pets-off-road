import { HttpStatus, Injectable } from '@nestjs/common';
import { AnimalVaccineService } from 'src/animal_vaccine/animal_vaccine.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { AnimalDatabase } from './repository/AnimalDatabase';

@Injectable()
export class AnimalService {
  constructor(private AnimalRepository: AnimalDatabase, private animalVaccineService: AnimalVaccineService) {}
  async create(createAnimalDto: CreateAnimalDto) {
    const animalId = await this.AnimalRepository.createAnimal(createAnimalDto.animal);

    if(createAnimalDto.vaccines.raiva){this.animalVaccineService.create({cod_vacina: 3, matricula_animal: animalId[0]})}
    if(createAnimalDto.vaccines.V10){this.animalVaccineService.create({cod_vacina: 2, matricula_animal: animalId[0]})}
    if(createAnimalDto.vaccines.V8){this.animalVaccineService.create({cod_vacina: 1, matricula_animal: animalId[0]})}
    
    return HttpStatus.CREATED
  }

  async findAll() {
    return await this.AnimalRepository.listOfAnimals();
  }

  async findByProject(projectId: number){
    return await this.AnimalRepository.listByProject(projectId);
  }
}
