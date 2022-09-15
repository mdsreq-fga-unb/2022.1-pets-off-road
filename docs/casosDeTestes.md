 ## Histórico de versão

| Data       | Versão | Modificação                                                                                                  | Autor                                                                                                                                                                                   |
| :--------- | :----- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11/09/2022 | 0.1    | Abertura do documento de casos de testes                                                               | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)
| 12/09/2022 | 0.2    | Acrescenta histórias de usuário  | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)
| 14/09/2022 | 0.3    | Acrescenta critérios de aceitação  | [@ShaineOliveira](https://github.com/ShaineOliveira) e [@JoseFilipi](https://github.com/JoseFilipi)


## Épico-01: Sessão do Usuário


**FT01 - Acesso/Login a Plataforma**

**US01 – Logar usuário na plataforma**
*Descrição:* O usuário deve ser capaz de acessar a plataforma por meio de e-mail e senha.

**Critérios de aceitação:**
- Campos obrigatórios precisam estar preenchidos para envio de login
- Validar autenticação de usuário
- Autenticar e redirecionar o usuário


**Resultados Esperados:**
O usuário deve ser redirecionado para a tela incial "Minha página" após ter realizado o login com e-mail e senha válidos;
O usuário deve receber um aviso de "Dados inválidos" ao colocar sua informações de forma incorreta.


**FT02 - Gerenciamento de conta**


**US06 – Editar dados pessoais**
**Descrição:** O usuário pode editar seus dados que foram preenchidos no cadastro.

**Critérios de aceitação:**
- Campos obrigatórios precisam estar preenchidos para alteração de dados (cpf, nome, email, telefone, UF, Endereço, senha, nível de acesso).

**Resultados Esperados:**
O usuário deve receber uma mensagem de "Dados atualizados", após clicar no botão de "Salvar";
O usuário deve receber uma mensagem de "Preencha todos os campos", após clicar no botão de "Salvar", caso esqueça algum campo obrigatório.


**US07 – Excluir projeto**
**Descrição:** O usuário que tiver um projeto cadastrado na plataforma, pode excluí-lo.

**Critérios de aceitação:**
- O ID relacionado ao projeto deve ser excluido do banco de dados na exclusão de um projeto

**Resultados Esperados:**
O projeto deverá ser excluído e o usuário ser redirecionado para a tela de profile.


**US08 – Editar informações do projeto**
**Descrição:** O usuário que tiver um projeto cadastrado na plataforma, pode editar as informações preenchidas no cadastro.

**Critérios de aceitação:**
- Campos obrigatórios devem estar preenchidos(CPF, nome, email, telefone, uf, cidade, senha, numero_membros)

**Resultados Esperados:**
O dono do projeto deve receber uma mensagem de "Dados atualizados", após clicar no botão de "Salvar";
O mesmo deve receber uma mensagem de "Preencha todos os campos", após clicar no botão de "Salvar", caso esqueça algum campo obrigatório.


**US09 – Cadastrar um projeto**
**Descrição:** O usuário que tiver um projeto e deseja cadastrá-lo na plataforma, pode acessar a opção de "Cadastro de projeto".

**Critérios de aceitação:**
- Só será realizado o cadastro caso o usuário possua 18 anos ou mais. - Campos obrigatórios devem estar preenchidos(nome, email, telefone, uf, cidade, senha, numero_membros).

**Resultados Esperados:**
Após preencher todos os campos obrigatórios, o organizador do projeto deve ser redirecionado para a "Minha página". Caso não seja preenchidos tais campos, o cadastro não será realizado.



## Épico-02: Interatividade com o sistema


**FT04 - Gerenciamento de cadastro de animais**

**US13 – Realizar cadastro do animal**
**Descrição:** O usuário que tem um projeto cadastrado, pode adicionar animais.

**Critérios de aceitação:**
- Exibir uma mensagem após a finalização do cadastro;
- Os campos obrigatórios devem estar preenchidos (matricula, project_id, nome, especie, raca, idade, condicao_saude, castrado ).

**Resultados Esperados:**
Ao preencher todos os dados do animal que se deseja cadastrar e clicar no botão de "Cadastrar", o usuário deve receber uma mensagem confirmando o cadastro, caso não seja possível finalizar, o mesmo receberá uma mensagem afirmando que o cadastro não foi realizado.


**US14 – Gerar histórico do animal**
**Descrição:** É possível exibir o "status" atual de todos os animais cadastrados na plataforma.

**Critérios de aceitação:**
- Campos como "Quando resgatou" e se está "em tratamento" devem estar preenchidos e são obrigatórios

**Resultados Esperados:**
Ao preencher todos os dados do animal que se deseja cadastrar e clicar no botão de "Cadastrar", o pet receberá um "status" (adotado, a procura).


**US15 – Exibir animais disponíveis para adoção**
**Descrição:** O animal que tiver como "status" o label "A procura", significa que ele estará disponível para adoção.

**Critérios de aceitação:**
- O status para adoção deve estar como true, partindo do ponto que não há associação entre o CPF de um dono cadastrado.

**Resultados Esperados:**
É possível selecionar o animal que apresenta o label de "A procura" para verificar todas as informações dele.


**US18 – Realizar a edição de informações do animal**
**Descrição:** Todo animal cadastrado na plataforma pode sofrer alteração nos dados.

**Critérios de aceitação:**
- Campos obrigatórios(nome, especie, raca, idade, condicao_saude). O campo de "cirurgia" não é obrigatório, bem como o campo CPF(específico para quando o animal for adotado, e o status de "disponível para adoção" mudar para false).

**Resultados Esperados:**
Caso o animal esteja cadastrado no site, o usuário responsável pelo mesmo pode alterar todas as informações dele. Se o animal não estiver cadastrado ou a pessoa que deseja alterar os dados não for o responsável pelo mesmo, ele não conseguirá acessar a página de alteração do pet.

**FT05 - Interação entre usuário**

**US22 – Excluir projeto**
**Descrição:** O dono do projeto (aquele que tem o seu CPF/CNPJ) cadastrado no site, pode excluí-lo a qualquer momento.

**Critérios de aceitação:**
- O projeto deve estar cadastrado no site;
- Apenas o dono do projeto pode excluí-lo.

**Resultados Esperados:**
Ao clicar no botão de "Excluir projeto", todas as informações da organização serão exlcuídas.


**US25 – Pesquisar por projetos**
**Descrição:** O usuário que tiver cadastro na plataforma pode pesquisar por projetos existentes.

**Critérios de aceitação:**
- O campo de busca deve estar preenchido para executar a query no sistema.

**Resultados Esperados:**
Ao pesquisar na barra de busca, deve aparecer todos os projetos cadastrados na plataforma.