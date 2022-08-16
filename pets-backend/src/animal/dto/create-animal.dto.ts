export class CreateAnimalDto {
    cpf_dono?: number;
    project_id: number;
    nome: string;
    especie: string;  
    raca?: string;
    idade: number;
    condicao_saude: boolean;   
    castrado: boolean;
    cirurgias?: string;
}
