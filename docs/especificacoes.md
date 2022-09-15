# Especificação de Caso de Uso

## Histórico de Versão


|    Data    | Versão |           Descrição           |            Autor(es)             |
| :--------: | :----: | :---------------------------: | :------------------------------: |
| 24/08/2022 |  0.1   |     Criação do documento      |           Pedro Helias           |
| 25/08/2022 |  0.2   | Adicionando mais casos de uso | Gabriel Marcolino e Pedro Helias |
| 07/09/2022 |  0.3   | Alteração e Correçaõ dos Casos de uso | Gabriel Marcolino e Pedro Helias |
| 13/09/2022 |  0.4   | Adicionando mais casos de uso | Jefferson França |
| 14/09/2022 |  0.5   | Correções finais nos casos de uso | Pedro Helias e Gabriel |
| 15/09/2022 |  0.6   | Adicionando mais casos de uso | Rhuan Marques |

Neste documento serão apresentadas especificações singulares sobre os casos de uso levantados pelo time.

## 1. Pesquisar por Projetos - **Pedro Helias**

### 1.1. Breve Descrcição

Este caso de uso cita a busca de projetos, respeitando os seus tipos e filtros específico(sresgate, castração, adoção, tipos de animal, entre outros).

### 1.2. Atores 

#### 1.2.1. Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

#### 1.2.2. Voluntário

A quem se destina algumas funcionalidades específicas dentro do domínio de um projeto. 

#### 1.2.3. Tutor

A quem se destina as funcionalidades básicas que o sistema provê, limitando-se ao nível de permissão do Tutor. 

### 1.3. Condições Prévias

O usuário tenha realizado acesso na plataforma e acessado a página de busca por projetos

### 1.4. Fluxo Básico de Eventos

- 4.4.1 Este caso se inicia quando o usuário acessa a plataforma
- 4.4.2. O usuário insere o login e senha.
- 4.4.3. Em seguida, o usuário busca a página que possibilita a pesquisa de projetos.
- 4.4.4. O sistema vai exibir os projetos existentes na plataforma.
- 4.4.5. O usuário pode, então, pesquisar por um projeto. 

### 1.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso não tenha passado pela autenticação de acesso a plataforma.

FE02 - O usuário busca por um projeto inexistente, retornando erro. 

FE03 - O usuário pode sair do site a qualquer momento, encerrando o caso de uso.

### 1.6. Regras de Negócio

RN01 - É necessário buscar por um projeto válido na plataforma.

### 1.7. Pós condição

O sistema sairá da página de busca por projetos em caso de acesso do usuário no projeto.

### 1.8. Ponto de Extensão

Não se aplica

## 2. CRUD Informações Pessoais do Usuário - **Gabriel Marcolino**

### 2.1. Breve Descrcição

Se trata de um conjunto de 4 funcionalidades respectivas a interação entre as informações pessoais do usuário (Criar, Deletar, Ler e Editar).
### 2.2. Atores 

#### 2.2.1. Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

#### 2.2.2. Voluntário

A quem se destina algumas funcionalidades específicas dentro do domínio de um projeto. 

#### 2.2.3. Tutor

A quem se destina as funcionalidades básicas que o sistema provê, limitando-se ao nível de permissão do Tutor. 
### 2.3. Condições Prévias

O usuário tenha realizado acesso na plataforma e selecionado as opções de gerência de edição de dados de usuário

### 2.4. Fluxo Básico de Eventos

- 5.4.1. Este caso se inicia quando o usuário acessa a plataforma
- 5.4.2. O usuário insere o login e senha.
- 5.4.3. Em seguida, o usuário busca a opção de editar os dados pessoais
- 5.4.4. Preenchendo todos os campos obrigatórios corretamente(cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso), os dados do usuário poderão ser atualizados

### 2.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso não tenha passado pela autenticação de acesso a plataforma.

FE02 - O usuário pode sair do site a qualquer momento, encerrando o caso de uso.

### 2.6. Regras de Negócio

RN01 - Todos os dados devem ser preenchidos utilizando informações válidas. Por exemplo: Não existe nomes pessoais com números e símbolos no meio, nem CPF com caracteres que não sejam números. 


### 2.7. Pós condição

Após a alteração dos dados pessoais, o sistema retorna para a página principal.

### 2.8. Ponto de Extensão

Não se aplica

## 3. CRUD de Cadastro de Animal - **Jefferson**

### 3.1. Breve Descrcição

Se trata de um conjunto de 4 funcionalidades respectivas a interação entre as informações do animal (Criar, Deletar, Ler e Editar).
### 3.2. Atores 

#### 3.3.1. Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

### 3.3. Condições Prévias

O usuário tenha realizado acesso na plataforma e selecionado as opções de gerência de edição de dados do animal

### 3.4. Fluxo Básico de Eventos

- 6.4.1. Este caso se inicia quando o usuário acessa a plataforma
- 6.4.2. O usuário insere o login e senha.
- 6.4.3. Em seguida, o usuário busca a opção de cadastrar um novo animal
- 6.4.4. Preenchendo todos os campos obrigatórios corretamente(matricula, project_id, nome, especie, raca, idade, condicao_saude, castrado), o cadastro será realizado.

### 3.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso não tenha passado pela autenticação de acesso a plataforma.

FE02 - O usuário não obtem acesso a esse ponto do sistema caso o usuário não seja dono do projeto.

FE03 - O usuário pode sair do site a qualquer momento, encerrando o caso de uso.

### 3.6. Regras de Negócio

RN01 - É necessário preencher os campos com os dados corretamente para poder cadastrar um novo animal(matricula, project_id, nome, especie, raca, idade, condicao_saude, castrado).

### 3.7. Pós condição

O sistema retornará para a página do projeto, assim que um animal for cadastrado.

### 3.8. Ponto de Extensão

O caso de uso se aplica apenas ao Dono do projeto, que herda diretamente de Tutor.

## 4. CRUD Projeto - **Rhuan Marques**

### 4.1. Breve Descrcição

Se trata de um conjunto de 4 funcionalidades respectivas a interação entre as informações do projeto (Criar, Deletar, Ler e Editar).
### 4.2. Atores 

#### 4.2.1. Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

### 4.3. Condições Prévias

O usuário tenha realizado acesso na plataforma e selecionado as opção de criação do animal

### 4.4. Fluxo Básico de Eventos

- 7.4.1. Este caso se inicia quando o usuário acessa a plataforma
- 7.4.2. O usuário insere o login e senha.
- 7.4.3. Em seguida, o usuário busca a opção de cadastrar um novo projeto
- 7.4.4. Preenchendo todos os campos obrigatórios corretamente (nome do prjeto, endereço, cpf, telefone), o cadastro será realizado.

### 4.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso não tenha passado pela autenticação de acesso a plataforma.

FE02 - O usuário não obtem acesso a esse ponto do sistema caso o usuário não seja dono do projeto.

FE03 - O usuário pode sair do site a qualquer momento, encerrando o caso de uso.

### 4.6. Regras de Negócio

RN01 - É necessário preencher os campos com os dados corretamente para poder cadastrar um novo animal (nome do prjeto, endereço, cpf, telefone).

### 4.7. Pós condição

O sistema retornará para a página de lesta de projetos.

### 4.8. Ponto de Extensão

O caso de uso se aplica apenas ao Dono do projeto, que herda diretamente de Tutor. 