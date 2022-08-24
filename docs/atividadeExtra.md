# Especificação de Caso de Uso

## Histórico de Versão


|    Data    | Versão |                          Descrição                          |            Autor(es)             |
| :--------: | :----: | :---------------------------------------------------------: | :------------------------------: |
| 24/08/2022 |  0.1   |                    Criação do documento                     |   Pedro Helias    |

Neste documento serão apresentadas especificações singulares sobre os casos de uso levantados pelo time.

# 1. Acessar a Plataforma

## 1.1 Breve Descrição

Este caso de uso engloba o fluxo de atividades relativas a logar na plataforma e realizar as diversas atividades internas relacionadas ao nível do usuário que acessou, sendo comum a todos os Atores. Há restrições mais a frente em outros fluxos relacionados ao nível de permissão do usuário, sendo atividades mais críticas e específicas, como Gerenciar um Projeto, destinadas ao Dono do projeto. 

## 1.2 Atores 

### 1.2.1 Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

### 1.2.2. Voluntário

A quem se destina algumas funcionalidades específicas dentro do domínio de um projeto. 

### 1.2.3. Tutor

A quem se destina as funcionalidades básicas que o sistema provê, limitando-se ao nível de permissão do Tutor. 

## 1.3. Condições Prévias

O usuário cadastrou credenciais no sistema.

## 1.4. Fluxo Básico de Eventos

- 1.4.1 Este caso se inicia quando o usuário deseja acessar o site com sua conta.
- 1.4.2. O usuário insere o login.
- 1.4.3. Em seguida, insere a senha.
- 1.4.4. O sistema vai confererir se, de fato, login e senha correspondem ao registrado no banco de dados. Caso positivo, vai liberar acesso ao sistema para o usuário. Caso contrário, retorna a tela de login e senha informando que não foi possível o acesso ao sistema. 

## 1.5. Fluxo Exceção

FE01 - O usuário tenta entrar no sistema com login e senha incorretos ou inexistentes. Neste caso, o sistema retorna ao ponto de inserção desses dados e informa que não foi possível acessar o sistema.

## 1.6. Regras de Negócio 

RN01 - É necessário utilizar login e senha existentes na base de dados, para correto acesso ao sistema.

RN02 - É necessário cadastrar um usuário para conseguir login e senha desse respectivo usuário, caso ele não possua acesso ao sistema. 

## 1.7. Pós Condição

Não se aplica 

## 1.8 Ponto de Extensão 

Esse caso de uso origina 3 extensões de caso de uso: 
- Filtrar informações básicas sobre os animais, em referência a adoção.
- Pesquisar por projetos.
- Gerenciar Informações pessoais de usuário.

# 2. Filtrar informações básicas sobre os animais, em referência a adoção

## 2.1. Breve Descrição

Este caso de uso se trata to ato de filtrar informações a respeito dos animais alocados em projetos, diretamente pensada para quem vai realizar a adoção de um animal. Neste caso de uso, o usuário poderá filtrar entre animais disponíveis, animais já adotados, raça, porte, sexo, entre outros. Por fim, este caso de uso engloba um fluxo que se finaliza em adoção do animal. 

## 2.2 Atores 

### 2.2.1 Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

### 2.2.2. Voluntário

A quem se destina algumas funcionalidades específicas dentro do domínio de um projeto. 

### 2.2.3. Tutor

A quem se destina as funcionalidades básicas que o sistema provê, limitando-se ao nível de permissão do Tutor. 

## 2.3. Condições Prévias

O usuário tenha realizado acesso na plataforma


## 2.4. Fluxo Básico de Eventos

- 2.4.1 Este caso se inicia quando o usuário acessa a plataforma
- 2.4.2. O usuário insere o login.
- 2.4.3. Em seguida, o usuário busca a página que possibilita a adoção de animais.
- 2.4.4. O sistema vai exibir os animais alocados em projetos ou em um projeto específico.
- 2.4.5. Neste ponto o usuário poderá selecionar os filtros presentes na plataforma.  

## 2.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso naõ tenha passado pela autenticação de acesso a plataforma.

FE02 - Caso o usuário não selecione filtros, o sistema não pode prosseguir na filtragem de dados.

## 2.6. Regras de Negócio 

RN01 - É necessário ao menos um campo de filtros selecionado para realizar a filtragem dos dados exibidos. 

## 2.7. Pós condição

## 2.8. Ponto de Extensão

Este Caso de Usuário origina a extensão de dois próximos casos de uso: 
- Visualizar animais disponíveis para adoção
- Visualizar animais adotados

# 3. Visualizar Animais Disponíveis para Adoção. 

## 3.1. Breve Descrição

Este Caso de Uso é originado a partir da seleção de filtragem escolhida pelo usuário. Neste caso há a exibição de animais disponíveis para adoção. Este caso de uso engloba o fluxo final que resulta em adoção do animal. 

## 3.2 Atores 

### 3.2.1 Dono do projeto

A quem se destina boa parte das funcionalidades de gestão dentro do sistema. Possui acesso quase irrestrito as funcionalidades do sistema

### 3.2.2. Voluntário

A quem se destina algumas funcionalidades específicas dentro do domínio de um projeto. 

### 3.2.3. Tutor

A quem se destina as funcionalidades básicas que o sistema provê, limitando-se ao nível de permissão do Tutor. 

## 3.3. Condições Prévias

O usuário cadastrou credenciais no sistema e procurou pelos animais cadastros em projetos. Por fim, filtrou pelos animais disponíveis para adoção.

## 3.4. Fluxo Básico de Eventos

- 3.4.1 Este caso se inicia quando o usuário acessa a plataforma
- 3.4.2. O usuário insere o login.
- 3.4.3. Em seguida, o usuário busca a página que possibilita a adoção de animais.
- 3.4.4. O sistema vai exibir os animais alocados em projetos ou em um projeto específico.
- 3.4.5. Neste ponto o usuário poderá selecionar os filtros presentes na plataforma.  
- 3.4.6. Ao selecionar o filtro de animais disponíveis para adoção, o usuário vai encontrar todos animais com esse status. 
  
## 3.5. Fluxo Exceção

FE01 - O usuário não obtém acesso a esse ponto do sistema caso naõ tenha passado pela autenticação de acesso a plataforma.

FE02 - Caso o usuário não selecione filtros, o sistema não pode prosseguir na filtragem de dados.

## 3.6. Regras de Negócio 

RN01 - É necessário ao menos um campo de filtros selecionado para realizar a filtragem dos dados exibidos. 

## 3.7. Pós condição

## 3.8. Ponto de Extensão

Este Caso de Usuário finaliza as extensões deste fluxo e segue apenas em sequências diretas de casos de uso, para enfim finalizar a adoção do animal. 