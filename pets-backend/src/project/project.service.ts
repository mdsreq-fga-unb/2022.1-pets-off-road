import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectDatabase } from './repository/ProjectDatabase';

@Injectable()
export class ProjectService {
  constructor(private ProjectRepository: ProjectDatabase){}
  async create(createProjectDto: CreateProjectDto) {
    return await this.ProjectRepository.createProject(createProjectDto);
  }

  async findAll() {
    return await this.ProjectRepository.findAllProjects();
  }

  async findOne(id: number) {
    return await this.ProjectRepository.findProjectById(id);
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
