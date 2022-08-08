export interface CreateUserDto{
    cpf: number;
    nome: string;
    email: string;
    telefone: number;
    senha: string;
    nivelAcesso?: boolean;
}

