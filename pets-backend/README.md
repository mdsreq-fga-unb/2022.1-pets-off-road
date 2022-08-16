# Backend PETS
## Inicializar na sua máquina:
```
docker-compose up --build
```
## API'S Prontas:
### Usuario
#### cadastro de usuario
post http://localhost:3030/user
#### busca de usuario por cpf
get http://localhost:3030/user/:cpf

#### busca por todos os usuarios cadastrados
get http://localhost:3030/user

#### login
post http://localhost:3030/user/login