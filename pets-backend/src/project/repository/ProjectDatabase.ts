import connection from '../../repositories/DatabaseConnection';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
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

    public async update(project: UpdateProjectDto, id:number){
        return await connection
            .table(this.table_name)
            .update({
                cpf: project.cpf,
                nome: project.nome,
                email: project.email,
                telefone: project.telefone,
                senha: project.senha,
                uf: project.uf,
                cidade: project.cidade,
                endereco: project.endereco
            })
            .where({id: id})
    }
}