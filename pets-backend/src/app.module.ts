import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { AnimalModule } from './animal/animal.module';
import { VaccineModule } from './vaccine/vaccine.module';

@Module({
  imports: [UserModule, ProjectModule, AnimalModule, VaccineModule],
})
export class AppModule {}
