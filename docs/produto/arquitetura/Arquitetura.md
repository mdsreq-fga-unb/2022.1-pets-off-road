# Documento de Arquitetura

## Histórico de versão

| Data       | Versão | Modificação                          | Autor                                                                                                 |
| :--------- | :----- | :----------------------------------- | :---------------------------------------------------------------------------------------------------- |
| 06/08/2022 | 0.1    | Abertura do documento de arquitetura | [@ShaineOliveira](https://github.com/ShaineOliveira)                                                  |
| 10/08/2022 | 0.2    | Novas adições no documento           | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)   |
| 12/08/2022 | 0.3    | Adição de metas                      | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)   |
| 13/08/2022 | 0.4    | Adição parcial de visão lógica       | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)   |
| 14/08/2022 | 0.5    | Adição do diagrama do FrontEnd       | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)   |
| 16/08/2022 | 0.6    | Adição de diagramas                  | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)   |
| 10/09/2022 | 0.7    | Corrindo formatação                  | [Gabriel Marcolino](https://github.com/GabrielMR360) e [Pedro Helias](https://github.com/pedrohelias) |
                          
                                                                                                                                                   
## Sumário

1.  **Introdução**

- 1.1 Finalidade
- 1.2 Escopo
- 1.3 Definições, Acrônimos e Abreviações
- 1.4 Visão Geral

2. **Representação Arquitetural**

- 2.1 Diagrama de Relações
- 2.2 Representação dos Serviços
- 2.2.1 Front-end
- 2.2.2 Back-end
- 2.3 Tecnologias
- 2.3.1 Typescript
- 2.3.2 React.js
- 2.3.3 MySQL
- 2.3.4 NodeJs
- 2.3.5 Styled-Components
- 2.3.6 Jest

3. **Metas e Restrições da Arquiteura**

- 3.1 Metas
- 3.2 Restrições Tecnológicas

4. **Visão Lógica**

- 4.1. Visão Geral
- 4.2. Pacotes de Design Significativos do Ponto de Vista da Arquitetura
- 4.3. Visão da Implantação
- 4.3.1 Front-end
- 4.3.2 Back-end

## 1. Introdução

### 1.1 Finalidade
O documento tem como objetivo fornecer uma visão geral da arquitetura abrangente do software do projeto Pets-off-road com foco na compreensão de como o sistema deve ser organizado e estruturado e assim, analisar os componentes tecnológicos para a integrar a solução.


### 1.2 Escopo
 Neste documento tem as principais informações em relação ao desenvolvimento do produto. Incialmente é feita a descrição da divisão geral do projeto (introdução, representação e metas arquiteturais). Além disso, o documento contém informações essenciais sobre o projeto,
 como descrição de conceitos utilizados ao longo do desenvolvimento, objetivos, explicação das atividades com foco na condução do projeto e por fim, descreve um planejamento de metas.



### 1.3 Definições, Acrônimos e Abreviações

| Abreviação |               Significado                |
| :--------: | :--------------------------------------: |
|    MDS     |  Métodos de Desenvolvimento de Software  |
|    REQ     |                Requisitos                |
|    IDE     |       Ambiente de desenvolvimento        |
|    API     |    Application Programming Interface     |
|    REST    | Transferência Representacional de Estado |
|    WEB     |              World Wide Web              |
|    HTML    |        HyperText Markup Language         |
|    CSS     |          Cascading Style Sheets          |
|     ID     |         Identificador de Usuário         |
|    PDF     |         Portable Document Format         |

### 1.4 Visão Geral

|              Tópico               |                                                Descrição                                                 |
| :-------------------------------: | :------------------------------------------------------------------------------------------------------: |
|            Introdução             |                  Descreve informações sobre a finalidade e a organização do documento.                   |
|    Representação arquitetural     |                               Representa a arquitetura geral do software.                                |
| Metas e restrições da Arquitetura |                             Demonstra os requisitos e objetivos do software.                             |
|           Visão lógica            | Descreve as partes significativas relacionadas ao ponto de vista da arquitetura e a modelagem de design. |


## 2. Representação Arquitetural

### 2.1 Diagrama de Relações


<img width="460" height="300" src="https://github.com/mdsreq-fga-unb/2022.1-pets-off-road/blob/38_arquitetura/docs/imagens/Diagrama_de_relacoes.png?raw=true">


### 2.2 Representação dos Serviços

#### 2.2.1 Front-end

O Front-end ficará responsável pela experiência do usuário com o web app, será desenvolvido para que tenha a melhor interação possível com as funcionalidades do Software.

#### 2.2.2 Back-end

O Backend ficará responsável pelas manipulações dos dados, tais como validações, regras de negócio, segurança, análises dos dados. Onde serão desenvolvidas as APIs, que irão integrar cada aplicação existente da plataforma, comunicando-se com o Banco de Dados, modelando as informações e retornando-as para o usuário.

### 2.3 Tecnologias

#### 2.3.1 Typescript

o TypeScript foi criado com o objetivo de incluir recursos que não estão presentes no JavaScript. Por meio dele é possível definir a tipagem estática, parâmetros e retorno de funções.Além de ser orientada a objetos,o TypeScript quando instalado via gerenciador de pacotes JS, permite checar erros e utilizar outros compiladores que suportam este mecanismo. 
Uma das maiores vantagens da TypeScript para o projeto é possibilitar que os IDEs proporcionem um ambiente mais seguro, ao apontar erros enquanto o código é digitado pelo usuário.



#### 2.3.2 React.js

React JS é uma biblioteca JavaScript para a criação de interfaces de usuário que foi criada em 2011 pelo time do Facebook com o objetivo objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social.
O framework foi escolhido para o FrontEnd pois é possível dividir uma tela em diversos componentes para trabalhar sobre eles de maneira individual e assim,os componentes são utilizados para reaproveitamento de código e padronização de interface.


#### 2.3.3 MySQL

O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. 


#### 2.3.4 NodeJS

NodeJS é uma plataforma de aplicação, na qual você escreve seus programas com Javascript que serão compilados, otimizados e interpretados pela máquina virtual V8. Essa VM é a mesma que o Google utiliza para executar Javascript no browser Chrome, e foi a partir dela que o criador do Node.js.
 Por assíncrona entenda que cada requisição ao Node.js não bloqueia o processo do mesmo, atendendo a um volume absurdamente grande de requisições ao mesmo tempo mesmo sendo single thread (só pode tratar uma requisição de cada vez).



#### 2.3.5 Styled-Components

Styled Components permitem a escrita de CSS em JavaScript usando Tagged Templates Literals. Isso remove a necessidade de mapeamento entre o componente e seus estilos, uma vez que o próprio componente é transformado em uma construção de estilo de baixo nível. Além disso,Styled Components geram nomes de classe exclusivos para seus estilos elimininando a possibilidade de bugs devido classes com nomes iguais.

#### 2.3.6 Jest

O Jest foi inicialmente criado para testar o framework React, também criado pelo Facebook. Porém sua implementação se tornou muito mais ampla, sendo utilizado como ferramenta de teste unitário para diversas plataformas JavaScript como Node.
Jest utiliza de "matchers" (combinadores) para realizar os testes. Existem diversos matchers para cada situação em particular dentro do contexto de testes.



## 3. Metas e Restrições da Arquitetura

### 3.1 Metas
O sistema WEB a ser desenvolvido tem como metas a serem atingidas:


* Melhorar o sistema de adoção de pets;
* Facilitar a divulgação de eventos relacionados a adoção e cuidados aos animais;
* Permitir o crescimento de projetos ligados as causas animais domésticos por meio de contato online;
* Permitir conexão de usuários defensores de causa animal e possíveis voluntários.



### 3.2 Restrições Tecnológicas

* **TypeScript**: Linguagem de programação a ser utilizada no BackEnd da aplicação.
* **Nest.JS**: Framework Node.js utilizada no BackEnd da aplicação, responsável pelas conexões com o banco e pelas regras de negócio
* **MySQL**: Sistema responsável pelo armazenamento e gerência dos dados apresentados à aplicação.
* **JavaScript**: Linguagem de programação específica para desenvolvimento web FrontEnd, juntamente do React.Js
* **React.js**: Framework de JavaScript específico para o FrontEnd da aplicação.
* **Jest**: Plataforma utilizada para testes unitários.
* **NodeJS**: Frameworkd de JavaScript direcionado para o desenvolvimento do BackEnd. 





## 4. Visão Lógica

### 4.1. Visão Geral
Uma página WEB estrutura-se em uma arquitetura de objetos determinados no modelo da aplicação, que interagem entre si, facilitando o acesso e possíveis manutenções. A aplicação se inicia com a tela de Login que irá buscar os dados de cadastro do usuário. Além disso, é possível executar um cadastro de acordo com o objetivo do utilizador da rede (projeto ou um voluntário). Após acesso permitido, é feito um direcionamento adequado a cada modelo de usuário, no caso de projetos opções relacionadas ao gerenciamento de finanças, animais e membros. Como voluntário, o usuário tem acesso aos projetos disponíveis e ações de adoção. Em "Minha página", ambos modelos de usuários possuem acesso as suas informações cadastradas, além da possibilidade de alterá-las (de acordo com o campo). Por fim, qualquer utilizador possui um *feed* onde é possível visualizar e criar *posts*.


### 4.2. Pacotes de Design Significativos do Ponto de Vista da Arquitetura
O Diagrama abaixo mostra a estrutura padrão dos pacotes referentes ao BackEnd e sua divisão:
<img width="460" height="300" src="https://github.com/mdsreq-fga-unb/2022.1-pets-off-road/blob/38_arquitetura/docs/imagens/Diagrama_backend.jpg?raw=true">



### 4.3 Visão da Implantação

### 4.3.1 Front-end

- Diagrama para o FrontEnd

<img width="460" height="300" src="https://github.com/mdsreq-fga-unb/2022.1-pets-off-road/blob/38_arquitetura/docs/imagens/Diagrama_do_front.png?raw=true">




### 4.3.2 Back-end

- Diagrama de Classes 


<img width="460" height="300" src="https://github.com/mdsreq-fga-unb/2022.1-pets-off-road/blob/38_arquitetura/docs/imagens/diagrama_de_classes.jpg?raw=true">
