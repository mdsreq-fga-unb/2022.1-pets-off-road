# Visão do Produto e Projeto
## Histórico de Versão

|    Data    | Versão |              Descrição               |                    Autor(es)                    |
| :--------: | :----: | :----------------------------------: | :---------------------------------------------: |
| 23/06/2022 |  0.1   |         Criação do documento         |                  Pedro Helias                   |
| 25/06/2022 |  0.2   |        Visão geral do projeto        |        Gabriel Marcolino e Rhuan Marques        |
| 28/06/2022 |  0.3   |        Visão geral do produto        |            Pedro Helias e Jefferson             |
| 28/06/2022 |  0.4   | Processo de engenharia de requisitos | Gabriel Marcolino, Pedro Helias e Rhuan Marques |




## Sumário
## 1. Visão Geral do Produto

A _Pets Off Road_ é uma organização fundamentada e gerida em grupos de _Whatsapp_ que visa, principalmente, auxiliar animais desamparados, que estão em situação de rua, sofrem maus tratos ou foram abandonados. A organização deixa claro que não é um abrigo para animais, mas sim uma causa composta por colaboradores que conseguem auxiliar o projeto da forma como podem, seja carona, lar temporário, entre outros. Cada colaborador se estabelece em um grupo o qual consegue auxiliar no projeto relacionado. É citado os grupos de Castração de animais de Rua, Auxílio a Zoonose do Valparaíso, Projeto de Resgate, o que sempre está precisando de novos colaboradores e mais recentemente o Grupo Teen que trabalha na construção de casinhas para animais de rua. A _Pets Off Road_ possui páginas em redes sociais, onde muito dos trabalhos de comunicação são realizados, além de ser uma ponte entre quem pode ajudar e o projeto.

* O produto proposto se trata de uma solução WEB (um website) que visa criar uma estrutura mais robusta e virtualizada de alguns serviços que a _Pets Off Road_ presta atualmente, ou seja, evoluir os meios de gerência e acessibilidade para os projetos, de forma a adaptar o que já é feito atualmente, seja com cadastros virtuais, listagem de componentes, até a criação de uma “ponte” entre a Pets Off Road e o usuário/colaborador.

* O produto possui origem acadêmica voltado a uma causa admirável, além de que se busca propor uma solução baseada no que já se configura na questão de gerência e fluxo de serviço. Em outras palavras, busca-se respeitar o que já existe e adaptar em uma solução mais dinâmica e robusta.

* Os usuários alvo são: Pessoas dispostas a adotar animais, realizar doações(remédio, pix) e/ou colaborar com a _Pets Off Road_. O cliente é a criadora da _Pets Off Road_.

* Atualmente, as operações realizadas são feitas via _Instagram_. A princípio, apenas essa plataforma consegue suprir o alcance do projeto, porém não supre as necessidades gerenciais e de controle. A cliente relata que possui bastante dificuldade para controlar e filtrar candidatos a voluntariado e/ou tutores de animais, além de que a gestão de dados também não é simplificada. Portanto, o produto visa a resolução dessas problemáticas expostas.

### 1.1. Declaração de Posição do Produto

| Para             | Usuários em comum                                                                                                                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quem             | Deseja realizar doações, adoção de animais e/ou voluntariado                                                                                                                                                                        |
| O _Pet Off Road_ | É um projeto em vias de migração para um Website                                                                                                                                                                                    |
| Que              | Disponibiliza informações para doações, formulários de cadastro para voluntários/tutores, histórico de cuidado com o animal, entre outros                                                                                           |
| Ao Contrário     | De procurar por informação em diversos posts da página oficial do projeto no _Instagram_, onde a cliente fica à mercê da orgarnização do APP                                                                                        |
| Nosso produto    | Condensará boa parte das atividades e informações que não estão presentes ou acessíveis no _Instagram_, ou são improváveis de serem executadas por lá, como gerência de informação, gestão e filtragem de voluntários, entre outros |

### 1.2. Objetivos do Produto

O principal objetivo é facilitar algumas tarefas realizadas pela organização, Pets Off Road, no dia-a-dia, já que normalmente todas as tarefas são feitas através do whatsapp e Instagram, redes sociais não muito adequadas para as resoluções dos serviços realizados.

Para ajudar na administração e gerenciamento das tarefas criaremos um website. Nele será possível que qualquer pessoa possa realizar seu cadastro, se tornar um voluntário e escolher quais grupos irá fazer parte, deixaremos disponíveis dados da organização para que doações possam ser feitas, também ficará disponível dados dos médicos parceiros e petshops que ajudam os animais quando precisam ser castrados e por fim será possível detalhar os eventos da Pets Off Road. E para a cliente, um backgroud onde será possível gerenciar e filtrar cadastros realizados por terceiros.

### 1.3. Tecnologias a Serem Utilizadas

Os desenvolvedores da Pets Off Road decidiram usar algumas tecnologias que já estão familiarizados, consequentemente, o tempo que terão para se dedicarem a escalada do projeto será maior. São elas:

* **Front End**: 
    *  Typescript <br>
    *  ReactJS <br>
    *  Redux <br>
    *  Next.JS <br>
    *  TailwindCSS + Styled-Components <br>
* **Back End**: 
    *  Typescript <br> 
    *  NodeJS <br>
    *  NestJS <br>
    *  Sequelize ou Prisma <br>
* **Banco de Dados**: 
    *  MySQL <br>

* **Comunicação**
    *  Meet <br>
    *  Discord <br>
    *  Whatsapp <br>

* **Organizacional**
    *  Github <br>
    *  Miro <br>
## 2. Visão Geral do Projeto
### 2.1. Organização do Projeto

|         Papel         |                                                                                           Atribuições                                                                                            | Responsável |                          Participantes                           |
| :-------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------: | :--------------------------------------------------------------: |
|     Desenvolvedor     |                                                              Codificar o produto, codificar testes unitários, realizar refatoração                                                               |      -      | Renan Rodrigues, Shaine Aparecida, Jose Filipi, Matheus Phillipo |
| Analista de Qualidade |                          Elaboração e implementação de modelos e ferramentas de controle de qualidade, com foco na adoção de políticas e técnicas de melhoria contínua.                          |      -      | Jefferson Franca, Gabriel Marcolino, Rhuan Marques, Pedro Helias |
|     Product Owner     | Construir, aperfeiçoar e manter o Backlog, assegurar que o mesmo esteja visível, claro e transparente para todos, assim como o objetivo do produto, solicitar a implementação de funcionalidades |      Pedro Helias      | Jefferson Franca, Gabriel Marcolino, Rhuan Marques, Pedro Helias |
|     Scrum Master      |                              Responsável por garantir que os rituais do Scrum sejam seguidos, age como um facilitador das dailys, sprint reviews e sprint planning                               |      Rhuan Marques      | Jefferson Franca, Gabriel Marcolino, Rhuan Marques, Pedro Helias |

### 2.2. Planejamento das Fases e/ou Iterações do Projeto

|  Sprint  |  Produto (Entrega)   | Data Início |  Data Fim  |
| :------: | :------------------: | :---------: | :--------: |
| Sprint 1 | Definição do Projeto | 21/06/2022  | 28/06/2022 |

### 2.3. Matriz de Comunicação 

|                               Descrição                               |       Área/Envolvidos        |     Periodicidade     | Produtos Gerados |
| :-------------------------------------------------------------------: | :--------------------------: | :-------------------: | :--------------: |
|              Acompanhamento das Atividades em Andamento               |      Equipe do Projeto       |        Semanal        |        -         |
| Acompanhamento dos Riscos, Compromissos, Ações Pendentes, Indicadores |     Equipe de Requisitos     |       Quinzenal       |        -         |
|                     Comunicar Situação do Projeto                     | Equipe do Projeto, Professor |        Semanal        |        -         |
|                      Comunicação geral do grupo                       |      Equipe do Projeto       | Sempre que necessário |        -         |


### 2.4. Gerenciamento de Riscos

Para o gerenciamento de riscos devem ser realizadas tarefas como: 

* Identificar todos os riscos possíveis e detectáveis em cada fase do projeto;  

* Executar as ações para mitigar os riscos que tenham um alto grau de exposição ao risco caso este ocorra na Lista de Riscos do Projeto;

* Fazer uma revisão da lista dos riscos periodicamente, com o propósito de averiguar uma possível incidência de um risco e ver se há outros riscos ainda não relatados;

* Em caso de confirmação de um risco previsto, agir no sentido de contingenciá-lo conforme programado;

* Registrar os riscos no Painel de Controle do Projeto e no Plano do Projeto (Riscos iniciais).

|                    Risco                    |                                                                      Descrição                                                                       | Probabilidade |                                       Ações de Mitigação                                        |
| :-----------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: | :---------------------------------------------------------------------------------------------: |
|  Dificuldade no desenvolvimento do sitema   |                           Falta de experiência da equipe responsável com as tecnologias utilizadas, complexidade da tarefa                           |     Alta      |                Pareamento com uma pessoa mais experiente e buscar ajuda externa.                |
| Algum membro da equipe trancar a disciplina |         As atividades da pessoa em questão terão que ser repassadas, dificultando o andamento do projeto e sobrecarga nos membros restantes          |     Baixa     |             Replanejamento das atividades e reatribuição para os membros restantes.             |
|        Baixa produtividade da equipe        |                                   Falta de disponibilidade de tempo, membro da equipe adoecer, falta de motivação                                    |     Alta      | Replanejar as atividade e redistribuí-las para que o andamento do projeto não seja prejudicado. |
|      Problema de comunicação da equipe      | Má interpretação das atividades, não atuação por efeitos externos(falta de internet, queda de energia, queda de algum meio de comunicação da equipe) |   Moderada    |                 Procurar outros meios de comunicação, reatribuir as atividades.                 |
|              Mudança de escopo              |                            A escolha do tema não agrade os membros da equipe ou a proposta seja rejeitada pelo professor                             |     Baixa     |                Reordenação dos elementos existentes e criação de um novo escopo.                |

### 2.5. Critérios de Replanejamento

Com base nos riscos do projeto foram estabelecidos os seguintes critérios de replanejamento:

* Mudança nos requisitos;
* Algum membro da equipe sair;
* Algum membro ficar doente;
* Atrasos no cronograma do projeto;

## 3. Processo de Desenvolvimento de Software

### 3.1. Atividade 1

| Atividade | Método | Ferramenta | Entrega |
| --------- | ------ | ---------- | ------- |
|           |        |            |         |

### 3.2. Atividade 2

| Atividade | Método | Ferramenta | Entrega |
| --------- | ------ | ---------- | ------- |
|           |        |            |         |

### 3.3. Atividade 3

| Atividade | Método | Ferramenta | Entrega |
| --------- | ------ | ---------- | ------- |
|           |        |            |         |

### 3.'n'. Atividade 'n'

| Atividade | Método | Ferramenta | Entrega |
| --------- | ------ | ---------- | ------- |
|           |        |            |         |

## 4. Processo de Engenharia de Requisitos

### 4.1. Elicitação de Requisitos

|                  Atividade                  |        Método        | Ferramenta  | Entrega |
| :-----------------------------------------: | :------------------: | :---------: | :-----: |
| Elucidação das ideias e análise do problema |      Brainstorm      | Miro e Meet |    -    |
|     Entender as necessidades do cliente     | Brainstorm e Reunião | Miro e Meet |    -    |
|     Definição da proposta de Requisitos     |       Reunião        |    Meet     |    -    |


  

### 4.2. Análise de Requisitos

|            Atividade            |                                                                Método                                                                |   Ferramenta   | Entrega |
| :-----------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :------------: | :-----: |
| Definir o website com o cliente | Maturação dos pontos levantados anteriormente a reunião com a cliente, desenvolvimento de proposta de projeto juntamente do cliente. |  Miro e Meet   |    -    |
|     Refinamento do backlog      |                                                               Reuniões                                                               | Meet e Discord |    -    |

### 4.3. Documentação de Requisitos

|       Atividade       |                       Método                       | Ferramenta  | Entrega |
| :-------------------: | :------------------------------------------------: | :---------: | :-----: |
| Construção do backlog | Escrita das histórias de usuário, épicos, features | Meet e Miro |    -    |

### 4.4. Verificação e Validação de Requisitos

| Atividade | Método | Ferramenta | Entrega |
| --------- | ------ | ---------- | ------- |
|      Conferir se os requisitos estão corretos a partir da validação dos requisitos     | Conferir se os requisitos estão corretos a partir de validação baseada em teste de software. Verificar as regras de negócio       |    Testes de software e Meet           |   -   |
|Revisar e conferir a conformidade do produto com os requisitos | Reunião de Review | Meet e Discord | - |




### 4.5. Gerenciamento de Requisitos

|         Atividade         |              Método               |     Ferramenta      | Entrega |
| :-----------------------: | :-------------------------------: | :-----------------: | :-----: |
| Acompanhamento do backlog | Reunião de planejamento da sprint | Meet e Github Pages |    -    |

## 5. Lições Aprendidas

### 5.1. Unidade 1
#### 5.1.1. MDS 
#### 5.1.2. Requisitos
#### 5.1.3. MDS-Requisitos

### 5.2. Unidade 2
#### 5.2.1. MDS 
#### 5.2.2. Requisitos
#### 5.2.3. MDS-Requisitos

### 5.3. Unidade 3
#### 5.3.1. MDS 
#### 5.3.2. Requisitos
#### 5.3.3. MDS-Requisitos

### 5.4. Unidade 4
#### 5.4.1. MDS 
#### 5.4.2. Requisitos
#### 5.4.3. MDS-Requisitos

##  6. Referências Bibliográficas