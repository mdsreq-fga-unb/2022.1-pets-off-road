import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [UserModule, ProjectModule, AnimalModule],
})
export class AppModule {}
