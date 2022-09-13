# Especificação de Caso de Uso

## Histórico de Versão


|    Data    | Versão |           Descrição           |            Autor(es)             |
| :--------: | :----: | :---------------------------: | :------------------------------: |
| 24/08/2022 |  0.1   |     Criação do documento      |           Pedro Helias           |
| 25/08/2022 |  0.2   | Adicionando mais casos de uso | Gabriel Marcolino e Pedro Helias |
| 07/09/2022 |  0.3   | Alteração e Correçaõ dos Casos de uso | Gabriel Marcolino e Pedro Helias |
| 13/09/2022 |  0.4   | Adicionando mais casos de uso | Jefferson França |

Neste documento serão apresentadas especificações singulares sobre os casos de uso levantados pelo time.

## 1. Pesquisar por Projetos

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
- 4.4.2. O usuário insere o login.
- 4.4.3. Em seguida, o usuário busca a página que possibilita a pesquisa de projetos.
- 4.4.4. O sistema vai exibir os projetos existentes na plataforma.

### 1.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso não tenha passado pela autenticação de acesso a plataforma.

### 1.6. Regras de Negócio

RN01 - É necessário ao menos um campo de filtro selecionado para realizar a pesquisa(resgate, castração, adoção, tipos de animal, entre outros).

### 1.7. Pós condição

### 1.8. Ponto de Extensão

Este Caso de Uso se origina a partir da extensão acessar a plataforma.

## 2. CRUD Informações Pessoais do Usuário

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
- 5.4.2. O usuário insere o login.
- 5.4.3. Em seguida, o usuário busca a opção de editar os dados pessoais

### 2.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso não tenha passado pela autenticação de acesso a plataforma.

FE02 - O usuário não obtem acesso a esse ponto do sistema caso o usuário não seja voluntário ou dono do projeto.

### 2.6. Regras de Negócio

RN01 - Ao menos um campo selecionado na busca (data, animal, usuário, entre outros).

### 2.7. Pós condição

### 2.8. Ponto de Extensão

O caso de uso divide a mesma inclusão que "Gerenciar Cadastro de Animal".

## 3. CRUD de Cadastro de Animal

### 3.1. Breve Descrcição

Se trata de um conjunto de 4 funcionalidades respectivas a interação entre as informações do animal (Criar, Deletar, Ler e Editar).
### 3.2. Atores 

#### 3.3.1. Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

### 3.3. Condições Prévias

O usuário tenha realizado acesso na plataforma e selecionado as opções de gerência de edição de dados do animal

### 3.4. Fluxo Básico de Eventos

- 6.4.1. Este caso se inicia quando o usuário acessa a plataforma
- 6.4.2. O usuário insere o login.
- 6.4.3. Em seguida, o usuário busca a opção de cadastrar um novo animal

### 3.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso não tenha passado pela autenticação de acesso a plataforma.

FE02 - O usuário não obtem acesso a esse ponto do sistema caso o usuário não seja dono do projeto.

### 3.6. Regras de Negócio

RN01 - É necessário preencher os campos com os dados corretamente para poder cadastrar um novo animal.

### 3.7. Pós condição

### 3.8. Ponto de Extensão

O caso de uso divide a mesma inclusão que "Gerenciar Informações Pessoais do Usuário".