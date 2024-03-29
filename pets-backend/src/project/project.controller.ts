import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Post('user')
  createUserProject(@Body() userProject: any) {
    return this.projectService.createUserProject(userProject);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findByCpf(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Get('search/:cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.projectService.findCpf(+cpf);
  }

  @Post('find/name')
  findByName(@Body('nome') nome: any) {
    return this.projectService.findByName(nome);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: number){
    return this.projectService.remove(id)
  }
}
