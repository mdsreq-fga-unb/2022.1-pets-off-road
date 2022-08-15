import { IsDefined} from "class-validator";

export class CreateUserDto {
  @IsDefined()
  cpf: number;

  @IsDefined()
  nome: string;

  @IsDefined()
  email: string;

  @IsDefined()
  telefone: number;

  @IsDefined()
  senha: string;

  @IsDefined()
  uf: string;

  @IsDefined()
  cidade: string

  @IsDefined()
  endereco: string
  
  nivelAcesso?: boolean;
}
