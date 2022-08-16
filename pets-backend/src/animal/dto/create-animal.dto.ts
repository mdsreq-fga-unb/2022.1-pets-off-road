export class CreateAnimalDto {
    cpf_dono?: number;
    project_id: number;
    nome: string;
    especie: string;  
    raca?: string;
    idade: string;
    condicao_saude: boolean;   
    castrado: boolean;
    cirurgias?: string;
}
