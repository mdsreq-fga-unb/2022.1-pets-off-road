# Backlog

## Histórico de Versão


|    Data    | Versão |                          Descrição                          |            Autor(es)             |
| :--------: | :----: | :---------------------------------------------------------: | :------------------------------: |
| 18/07/2022 |  0.1   |                    Criação do documento                     |   Pedro Helias, Rhuan, Daniel    |
| 18/07/2022 |  0.2   |             Alteração nas histórias de usuário              |      Pedro Helias. Gabriel       |
| 13/08/2022 |  0.3   |                     Organizando backlog                     | Pedro Helias e Gabriel Marcolino |
| 15/08/2022 |  0.4   |           Adicionando US's e organizando backlog            |        Gabriel Marcolino         |
| 16/08/2022 |  0.5   | Removendo algumas US's e adicionando critérios de aceitação |        Gabriel Marcolino         |
| 13/09/2022 |  0.6   | Alteração nos critérios de aceitação |        Pedro Helias e Gabriel Marcolino         |



## Backlog do Produto

A partir do levantamento do requisitos, foi construída uma estrutura com a organização proposta pela SAFe que é separa por tema, épicos, features e histórias de usuário para definir o Backlog do Produto. Abaixo o documento é descrito para melhor visualização:

## **Épico-01: Sessão do Usuário**

### **FT01 - Acesso/Login a Plataforma**

#### US01

|                       US01 | Logar usuário na plataforma                                                                                     |
| -------------------------: | :-------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** acessar a plataforma usando a conta criada **para** começar a usar o site |
|                 **Pontos** | -                                                                                                               |
| **Critérios de aceitação** | - Campos obrigatórios precisam estar preenchidos para envio de login (cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso)                                       |
|                            | - Validar autenticação de usuário | 
|                            | - Autenticar e redirecionar o usuário  | 

 
 
#### US02

|                       US02 | Logar usuário na plataforma                                                                                |
| -------------------------: | :--------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** voluntário **quero** acessar a plataforma usando a conta criada **para** começar a usar o site |
|                 **Pontos** | -                                                                                                          |
| **Critérios de aceitação** | - Campos obrigatórios precisam estar preenchidos para envio de login (cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso)                                                   |
|                            | - Validar autenticação de usuário | 
|                            | - Autenticar e redirecionar o usuário  |                                                                                                       |


#### US03

|                       US03 | Logar usuário na plataforma                                                                           |
| -------------------------: | :---------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** acessar a plataforma usando a conta criada **para** começar a usar o site |
|                 **Pontos** | -                                                                                                     |
| **Critérios de aceitação** | - Campos obrigatórios precisam estar preenchidos para envio de login  (cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso)                                                  |
|                            | - Validar autenticação de usuário | 
|                            | - Autenticar e redirecionar o usuário  |                                                                                                     |

### **FT02 - Gerenciamento de conta**

#### US04

|                       US04 | Editar dados pessoais                                                                                   |
| -------------------------: | :------------------------------------------------------------------------------------------------------ |
|              **Descrição** | **Eu como** dono do projeto **quero** editar meus dados pessoais **para** atualizar meus dados recentes |
|                 **Pontos** | -                                                                                                       |
| **Critérios de aceitação** | - Campos obrigatórios precisam estar preenchidos para alteração  de dados (cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso)                                                                                                         |

#### US05

|                       US05 | Editar dados pessoais                                                                              |
| -------------------------: | :------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** voluntário **quero** editar meus dados pessoais **para** atualizar meus dados recentes |
|                 **Pontos** | -                                                                                                  |
| **Critérios de aceitação** | - Campos obrigatórios precisam estar preenchidos para alteração  de dados (cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso)                                                                                                           |

#### US06

|                       US06 | Editar dados pessoais                                                                         |
| -------------------------: | :-------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** editar meus dados pessoais **para** atualizar meus dados recentes |
|                 **Pontos** | -                                                                                             |
| **Critérios de aceitação** | - Campos obrigatórios precisam estar preenchidos para alteração  de dados (cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso)                                                                                                      |

#### US07

|                       US07 | Excluir projeto                                                                                  |
| -------------------------: | :----------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** excluir projeto **para** adequar ao estado atualdo projeto |
|                 **Pontos** | -                                                                                                |
| **Critérios de aceitação** | - O ID relacionado ao projeto deve ser excluido do banco de dados na exclusão de um projeto                                                                                                |

#### US08

|                       US08 | Editar informações do projeto                                                                                    |
| -------------------------: | :--------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** editar as informações do projeto **para** manter as infomaçẽos ataulizadas |
|                 **Pontos** | -                                                                                                                |
| **Critérios de aceitação** | - Campos obrigatórios devem estar preenchidos(CPF, nome, email, telefone, uf, cidade, senha, numero_membros)                                                                                                              |

#### US09

|                       US09 | Cadastrar um projeto                                                                                                       |
| -------------------------: | :------------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** realizar o cadastro de um projeto para ter mais controle de gerenciamento e recursos |
|                 **Pontos** | -                                                                                                                          |
| **Critérios de aceitação** | - Só será realizado o cadastro caso o usuário possua 18 anos ou mais.                                     - Campos obrigatórios devem estar preenchidos(nome, email, telefone, uf, cidade, senha, numero_membros)                              |

#### US10

|                       US10 | Remover voluntário da organização                                                                      |
| -------------------------: | :----------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** retirar um voluntário **para** corrigir a composição do  projeto |
|                 **Pontos** |                                                                                                        |
| **Critérios de aceitação** |                                                                                                        |
                                      

### **FT03 - Logística**

#### US11

|                       US11 | Categorizar publicação                                                                                      |
| -------------------------: | :---------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** categorizar as publicações **para** associar a uma métrica de minha preferência |
|                 **Pontos** | -                                                                                                           |
| **Critérios de aceitação** | -                                                                               |


#### US12

|                       US12 | Categorizar publicação                                                                                           |
| -------------------------: | :--------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** voluntário **quero** categorizar as publicações **para** associar a uma métrica de minha preferência |
|                 **Pontos** | -                                                                                                                |
| **Critérios de aceitação** | -                                                                                                                |



## **Épico-02: Interatividade com o sistema**

### **FT04 - Gerenciamento de cadastro de animais**

#### US13

|                       US13 | Realizar cadastro do animal                                                                                              |
| -------------------------: | :----------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** realizar o cadastro do animal **para** facilitar a busca dos usuários para adoções |
|                 **Pontos** | 0                                                                                                                        |
| **Critérios de aceitação** | - Exibir uma mensagem após a finalização do cadastro  |
|**Critérios de aceitação** | - Os campos obrigatórios devem estar preenchidos (matricula, project_id, nome, especie, raca, idade, condicao_saude, castrado )
                                                                   |

#### US14

|                       US14 | Gerar histórico do animal                                                                                          |
| -------------------------: | :----------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** gerar histórico do animal **para** facilitar processos documentais de adoção |
|                 **Pontos** |                                                                                                                    |
| **Critérios de aceitação** |           -  Campos como "Quando resgatou" e se está "em tratamento" devem estar preenchidos e são obrigatórios                                                                                                        |

#### US15

|                       US15 | Exibir animais disponíveis para adoção                                                                                   |
| -------------------------: | :----------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** quero ver quais animais estão disponíveis para adoção **para** ter mais liberdade de escolha |
|                 **Pontos** | -                                                                                                                        |
| **Critérios de aceitação** | - O status para adoção deve estar como _true_, partindo do ponto que não há associação entre o CPF de um dono cadastrado.                                                                                                                         | 

#### US16

|                       US16 | Filtrar os tipos de animais/raça                                                                      |
| -------------------------: | :---------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** filtrar os tipos de animais/raças **para** escolher um animal para adoção |
|                 **Pontos** | -                                                                                                     |
| **Critérios de aceitação** | -                                                                                                     |

#### US17

|                       US17 | Verificar animais adotados                                                                                                |
| -------------------------: | :--------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** ver quais animais foram adotados **para** ter entendimento sobre o histórico adotado |
|                 **Pontos** | -                                                                                                                |
| **Critérios de aceitação** | - O status de adoção deve estar alterado para "disponível" e visível para o usuário.                                                                                                               |

#### US18

|                       US18 | Realizar a edição de informações do animal                                                                                                        |
| -------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------ |
|              **Descrição** | **Eu como** dono do projeto **quero** realizar edição de informações do animal **para** ter maior controle sobre os animais vinculados ao projeto |
|                 **Pontos** | -                                                                                                                                                 |
| **Critérios de aceitação** | - Campos obrigatórios(nome, especie, raca, idade, condicao_saude). O campo de "cirurgia" não é obrigatório, bem como o campo CPF(específico para quando o animal for adotado, e o status de "disponível para adoção" mudar para false).                                                                                                                                                 |


### **FT05 - Interação entre usuário**

#### US19

|                       US19 | Filtrar a pesquisa de projetos por preferências pessoais                                                                             |
| -------------------------: | :----------------------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** voluntário **quero** filtrar a pesquisa de projetos por referências pessoais **para** ter maior simplicidade no processo |
|                 **Pontos** | -                                                                                                                                    |
| **Critérios de aceitação** | -                                                                                                                                    |


#### US20

|                       US20 | Realizar cadastro para adoção do animal                                                             |
| -------------------------: | :-------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** realizar cadastro do animal **para** ter maior simplicidade no processo |
|                 **Pontos** | -                                                                                                   |
| **Critérios de aceitação** | -                                                                                                   |

#### US21

|                       US21 | Realizar publicação de post                                                                                                 |
| -------------------------: | :-------------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** realizar a publicação de um post **para** facilitar a busca dos usuários para adoções |
|                 **Pontos** | 0                                                                                                                           |
| **Critérios de aceitação** |                                                                                                                             |

#### US22

|                       US22 | Cadastrar dados para candidatura a adoção |
| -------------------------: | :---------------------------------------- |
|              **Descrição** | **Eu como**  **quero** **para**           |
|                 **Pontos** | -                                         |
| **Critérios de aceitação** | -                                         |

#### US23

|                       US23 | Adicionar usuário em um projeto                                                         |
| -------------------------: | :-------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** adicionar um voluntário **para** compor o projeto |
|                 **Pontos** | -                                                                                       |
| **Critérios de aceitação** | -                                                                                       |

#### US24

|                       US24 | Realizar pesquisa de um projeto                                                                       |
| -------------------------: | :---------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** voluntário **quero** realizar a pesquisa de um projeto **para** ajudar causas importantes |
|                 **Pontos** | -                                                                                                     |
| **Critérios de aceitação** | -                                                                                                     |

#### US25

|                       US25 | Pesquisar por projetos                                                                                    |
| -------------------------: | :-------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** pesquisar por outros projetos **para** buscar o mesmo serviço ou oportunidade |
|                 **Pontos** | -                                                                                                         |
| **Critérios de aceitação** | - O campo de busca deve estar preenchido para executar a query no sistema.                                                                                                          |

#### US26

|                       US26 | Realizar pesquisa de documentos                                                                                    |
| -------------------------: | :----------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** realizar a pesquisa de documento **para** utilizar dados armazenados no site |
|                 **Pontos** | -                                                                                                                  |
| **Critérios de aceitação** | -                                                                                                                  |

#### US27

|                       US27 |  Avaliar candidatura de voluntário                                                                                                                                    |
| -------------------------: | :----------------------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** dono do projeto **quero** quero receber dados cadastrados de um candidato a vonluntário **para** avaliar sua candidatura |
|                 **Pontos** | -                                                                                                                                    |
| **Critérios de aceitação** | -                                                                                                                                    |

### **FT06 - Notificação de situação**				

#### US28

|                       US28 | Receber Notificação                                                                                                                                                             |
| -------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|              **Descrição** | **Eu como** dono do projeto **quero** receber notificações via email **para** centralizar os dados gerados pelo projeto(alertas, propostas de voluntários, propostas de adoção) |
|                 **Pontos** | -                                                                                                                                                                               |
| **Critérios de aceitação** | -                                                                                                                                                                               |

#### US29

|                       US29 | Receber Notificação                                                                                                                             |
| -------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** voluntário **quero** receber notificações do processo de voluntariado **para** me manter informado sobre a atualizações no processo |
|                 **Pontos** | -                                                                                                                                               |
| **Critérios de aceitação** | -                                                                                                                                               |

#### US30

|                       US30 | Receber Notificação                                                                                                                |
| -------------------------: | :--------------------------------------------------------------------------------------------------------------------------------- |
|              **Descrição** | **Eu como** tutor **quero** receber notificações do processo de adoção **para** me manter informado sobre atualizações no processo |
|                 **Pontos** | -                                                                                                                                  |
| **Critérios de aceitação** | -                                                                                                                                  |
<!--   												
O documento foi construído numa planilha de Excel virtual, presente no link abaixo. 

<a href="https://docs.google.com/spreadsheets/d/1EftTSPJfwSpOPxZRh9l8VIjlzVJ5hROlLfbYlBwVJSs/edit?usp=sharing">Backlog</a>   -->
  

