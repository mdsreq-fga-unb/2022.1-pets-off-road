export class vaccines {
  raiva?: boolean;
  V8?: boolean;
  V10?: boolean;
}
export class CreateAnimalDto {
  animal: {
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
  vaccines: vaccines;
}
