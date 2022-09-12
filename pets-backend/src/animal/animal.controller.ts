import {
  Controller,
  Get,
  Post,
  Body,
  Param,
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

  @Get('project/:id')
  findByProjectId(@Param('id') id: number) {
    return this.animalService.findByProject(id);
  }
}
