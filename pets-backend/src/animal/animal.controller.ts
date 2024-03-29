import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {    
    return this.animalService.create(createAnimalDto);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  findbyId(@Param('id') id: number) {
    return this.animalService.findById(id);
  }

  @Get('project/:id')
  findByProjectId(@Param('id') id: number) {
    return this.animalService.findByProject(id);
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() animal: any) {
    return this.animalService.updateAnimal(animal, id)
  }

}
