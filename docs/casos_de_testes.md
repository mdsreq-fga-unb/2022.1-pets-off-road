## Histórico de versão

| Data       | Versão | Modificação                                                                                                  | Autor                                                                                                                                                                                   |
| :--------- | :----- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11/09/2022 | 0.1    | Abertura do documento de casos de testes                                                               | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)
| 12/09/2022 | 0.2    | Acrescenta histórias de usuário  | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)



## DOCUMENTAÇÃO DOS CASOS DE TESTE

## Épico-01: Sessão do Usuário


**FT01 - Acesso/Login a Plataforma**

**US01 – Logar usuário na plataforma.**
**Descrição:** O usuário deve ser capaz de acessar a plataforma por meio de e-mail e senha.

**Critérios de aceitação**
O usuário deve ter cadastrado um e-mail e senha;
Os campos obrigatórios devem ser preenchidos conforme o cadastro. 


**Resultados Esperados**
O usuário deve ser redirecionado para a tela incial "Minha página" após ter realizado o login com e-mail e senha válidos;
O usuário deve receber um aviso de "Dados inválidos" ao colocar sua informações de forma incorreta.


**FT02 - Gerenciamento de conta**


**US06 – Editar dados pessoais.**
**Descrição:** O usuário pode editar seus dados que foram preenchidos no cadastro.

**Critérios de aceitação**
Os campos que desejam ser alterados precisam estar preenchidos;
Estar logado na plataforma.

**Resultados Esperados**
O usuário deve receber uma mensagem de "Dados atualizados", após clicar no botão de "Salvar";
O usuário deve receber uma mensagem de "Preencha todos os campos", após clicar no botão de "Salvar", caso esqueça algum campo obrigatório.


**US07 – Excluir projeto.**
**Descrição:** O usuário que tiver um projeto cadastrado na plataforma, pode excluí-lo.

**Critérios de aceitação**
Deve ter feito um cadastro do projeto, antes de realizar essa ação;
Estar logado na plataforma.

**Resultados Esperados**
O projeto deverá ser excluído e o usuário ser redirecionado para a tela de profile.


**US08 – Editar informações do projeto.**
**Descrição:** O usuário que tiver um projeto cadastrado na plataforma, pode editar as informações preenchidas no cadastro.

**Critérios de aceitação**
Os campos que desejam ser alterados, devem estar preenchidos corretamente;
Estar logado na plataforma.

**Resultados Esperados**
O dono do projeto deve receber uma mensagem de "Dados atualizados", após clicar no botão de "Salvar";
O mesmo deve receber uma mensagem de "Preencha todos os campos", após clicar no botão de "Salvar", caso esqueça algum campo obrigatório.


**US09 – Cadastrar um projeto.**
**Descrição:** O usuário que tiver um projeto e deseja cadastrá-lo na plataforma, pode acessar a opção de "Cadastro de projeto".

**Critérios de aceitação**
Deve ter no mínimo 18 anos para a realização do cadastro e um projeto existente.

**Resultados Esperados**
Após preencher todos os campos obrigatórios, o organizador do projeto deve ser redirecionado para a "Minha página". Caso não seja preenchidos tais campos, o cadastro não será realizado.



## Épico-02: Interatividade com o sistema


**FT04 - Gerenciamento de cadastro de animais**

**US13 – Realizar cadastro do animal**
**Descrição:** O usuário que tem um projeto cadastrado, pode adicionar animais.

**Critérios de aceitação**
Ter cadastro de projeto na plataforma;
Estar logado na plataforma.

**Resultados Esperados**
Ao preencher todos os dados do animal que se deseja cadastrar e clicar no botão de "Cadastrar", o usuário deve receber uma mensagem confirmando o cadastro, caso não seja possível finalizar, o mesmo receberá uma mensagem afirmando que o cadastro não foi realizado.


**US14 – Gerar histórico do animal**
**Descrição:** É possível exibir o "status" atual de todos os animais cadastrados na plataforma.

**Critérios de aceitação**
Ter cadastro de usuário e animais no site;
Estar logado na plataforma.

**Resultados Esperados**
Ao preencher todos os dados do animal que se deseja cadastrar e clicar no botão de "Cadastrar", o pet receberá um "status" (adotado, a procura).


**US15 – Exibir animais disponíveis para adoção**
**Descrição:** O animal que tiver como "status" o label "A procura", significa que ele estará disponível para adoção.

**Critérios de aceitação**
Ter cadastro de usuário e animais no site;
Estar logado na plataforma.

**Resultados Esperados**
É possível selecionar o animal que apresenta o label de "A procura" para verificar todas as informações dele.


**US18 – Realizar a edição de informações do animal**
**Descrição:** Todo animal cadastrado na plataforma pode sofrer alteração nos dados.

**Critérios de aceitação**
Estar logado na plataforma;
Ter cadastro de animais no site.

**Resultados Esperados**
Caso o animal esteja cadastrado no site, o usuário responsável pelo mesmo pode alterar todas as informações dele. Se o animal não estiver cadastrado ou a pessoa que deseja alterar os dados não for o responsável pelo mesmo, ele não conseguirá acessar a página de alteração do pet.

**FT05 - Interação entre usuário**

**US22 – Excluir projeto**
**Descrição:** O dono do projeto (aquele que tem o seu CPF/CNPJ) cadastrado no site, pode excluí-lo a qualquer momento.

**Critérios de aceitação**
Ter cadastro de projeto na plataforma.
Estar logado na plataforma.

**Resultados Esperados**
Ao clicar no botão de "Excluir projeto", todas as informações da organização serão exlcuídas.
