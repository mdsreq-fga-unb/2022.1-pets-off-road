import { AnimalController } from "../animal.controller";

export interface Animal {
  matricula: number;
  cpf_dono?: number;
  project_id: number;
  nome: string;
  especie: string;
  raca?: string;
  idade: number;
  condicao_saude: boolean;
  castrado: boolean;
  cirurgias?: string;
  criado_em: string;
  modificado_em: string;
}
