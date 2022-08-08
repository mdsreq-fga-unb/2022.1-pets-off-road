export interface User {
  cpf: number;
  nome: string;
  email: string;
  telefone: number;
  senha: string;
  nivelAcesso?: boolean;
  criadoEm: string;
}
