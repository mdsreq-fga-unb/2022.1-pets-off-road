# Backend PETS
## Inicializar na sua máquina:
```
make up
knex migrate:latest
```
## API'S:
### User
#### cadastro de usuario
Post http://localhost:3030/user
Body
```
{
    "cpf": 1,
    "nome": "string",
    "email": "string",
    "telefone": 1,
    "senha": "string",
    "uf":"DF",
    "cidade": "string",
    "endereco": "string"

    Opcional
    "nivel_acesso": boolean,
}
```
#### busca de usuario por cpf
Get http://localhost:3030/user/:cpf

#### busca por todos os usuarios cadastrados
Get http://localhost:3030/user

#### login
Post http://localhost:3030/user/login
Body
```
{
    "email": "string",
    "senha": "string"
}
```

### Project
#### Cadastro de Projeto
Post http://localhost:3030/project
Body:
```
{
    "cpf": 1,
    "nome": "string",
    "email": "string",
    "telefone": 1,
    "senha": "string",
    "uf":"DF",
    "cidade": "string",
}
```
#### Busca de Projeto por id
Get http://localhost:3030/project/id
#### Atualização de Projeto
Put http://localhost:3030/project/id
Body:
```
Enviar somente atributos que quer alterar
Exemplo:
{
    "nome": "novo nome",
    "email": "novo email",
    "telefone": 2,
    ...
}
```
#### Busca de Todos Os Projetos Cadastrados
Get http://localhost:3030/project

### ANIMAL
#### CADASTRO DE ANIMAL
Post http://localhost:3030/animal
Body:
```
{
	"cpf_dono": null, // opcional
	"project_id": 1,
	"nome": "string",
	"especie": "string",
	"raca": "string",
	"idade": 5,
	"condicao_saude": boolean,
	"castrado": boolean,
	"cirurgias": null, // opcional
}
``
#### BUSCA DE TODOS OS ANIMAIS CADASTRADOS
Get http://localhost:3030/animal
