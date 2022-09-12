import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { AnimalDatabase } from './repository/AnimalDatabase';

@Injectable()
export class AnimalService {
  constructor(private AnimalRepository: AnimalDatabase) {}
  create(createAnimalDto: CreateAnimalDto) {
    return this.AnimalRepository.createAnimal(createAnimalDto.animal);
  }

  findAll() {
    return this.AnimalRepository.listOfAnimals();
  }
}
