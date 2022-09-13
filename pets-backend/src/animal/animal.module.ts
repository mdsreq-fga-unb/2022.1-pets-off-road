import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { AnimalDatabase } from './repository/AnimalDatabase';
import { AnimalVaccineService } from '../animal_vaccine/animal_vaccine.service';
import { AnimalVaccineModule } from 'src/animal_vaccine/animal_vaccine.module';

@Module({
  imports: [AnimalVaccineModule],
  controllers: [AnimalController],
  providers: [AnimalService, AnimalDatabase],
})
export class AnimalModule {}
