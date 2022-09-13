import { IsDefined, IsEmail } from 'class-validator';
import { eUF } from '../types/eUF';
export class CreateUserDto {
  @IsDefined()
  cpf: string;

  @IsDefined()
  nome: string;

  @IsDefined()
  email: string;

  @IsDefined()
  telefone: number;

  @IsDefined()
  senha: string;

  @IsDefined()
  uf: eUF;

  @IsDefined()
  cidade: string;

  @IsDefined()
  endereco: string;

  nivelAcesso?: boolean;
}
