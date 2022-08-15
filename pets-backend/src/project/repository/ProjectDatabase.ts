import connection from '../../repositories/DatabaseConnection';
import { CreateProjectDto } from '../dto/create-project.dto';
import { Project } from '../entities/project.entity';

export class ProjectDatabase {
    public table_name = 'project';

    public async createProject(project: CreateProjectDto){
        return await connection.insert(project).table(this.table_name);
    }

    public async findAllProjects(): Promise<Project[]>{
        return await connection.select().table(this.table_name)
    }

    public async findProjectById(id:number): Promise<Project>{
        const projects = await  connection.select().table(this.table_name).where({id:id})
        for(let project of projects){
            return project
        }
    }
}