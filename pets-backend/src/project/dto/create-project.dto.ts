import { IsDefined } from 'class-validator';

export class CreateProjectDto {
  @IsDefined()
  cpf: number;

  @IsDefined()
  nome: string;

  @IsDefined()
  email: string;

  @IsDefined()
  telefone: number;

  @IsDefined()
  uf: string;

  @IsDefined()
  cidade: string;

  @IsDefined()
  endereco: string;
}
