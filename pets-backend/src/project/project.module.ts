import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectDatabase } from './repository/ProjectDatabase';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ProjectDatabase]
})
export class ProjectModule {}
