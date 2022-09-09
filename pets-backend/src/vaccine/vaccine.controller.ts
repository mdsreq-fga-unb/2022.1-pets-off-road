import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { Vaccine } from './entities/vaccine.entity';

@Controller('vaccine')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post()
  create(@Body() createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    return this.vaccineService.create(createVaccineDto);
  }

  @Get()
  findAll() {
    return this.vaccineService.findAll();
  }

  @Get('id')
  findById(@Param('id') id: number) {
    return this.vaccineService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vaccineService.remove(id);
  }
} 
