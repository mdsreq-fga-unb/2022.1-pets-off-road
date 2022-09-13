import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { AnimalModule } from './animal/animal.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { AnimalVaccineModule } from './animal_vaccine/animal_vaccine.module';
import { AnimalVaccineService } from './animal_vaccine/animal_vaccine.service';

@Module({
  imports: [UserModule, ProjectModule, AnimalModule, VaccineModule, AnimalVaccineModule],
})
export class AppModule {}
