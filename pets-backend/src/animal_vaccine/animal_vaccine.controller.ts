import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalVaccineService } from './animal_vaccine.service';
import { CreateAnimalVaccineDto } from './dto/create-animal_vaccine.dto';
import { UpdateAnimalVaccineDto } from './dto/update-animal_vaccine.dto';

@Controller('animal-vaccine')
export class AnimalVaccineController {
  constructor(private readonly animalVaccineService: AnimalVaccineService) {}

  @Post()
  create(@Body() createAnimalVaccineDto: CreateAnimalVaccineDto) {
    return this.animalVaccineService.create(createAnimalVaccineDto);
  }

  @Get()
  findAll() {
    return this.animalVaccineService.findAll();
  }
}
