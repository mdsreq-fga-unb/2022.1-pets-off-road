import { Module } from '@nestjs/common';
import { AnimalVaccineService } from './animal_vaccine.service';
import { AnimalVaccineController } from './animal_vaccine.controller';
import { AnimalVaccineDatabase } from './repository/AnimalVaccineDatabase';

@Module({
  controllers: [AnimalVaccineController],
  providers: [AnimalVaccineService, AnimalVaccineDatabase],
})
export class AnimalVaccineModule {}
