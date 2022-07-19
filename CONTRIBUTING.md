# Como contribuir? 

* Caso seja um colaborador externo, dê um fork no projeto.
* Para contribuir no projeto é recomendado abrir as issues existentes em [Pets Off Road](https://github.com/mdsreq-fga-unb/2022.1-pets-off-road/issues) para entender o que o projeto precisa.
* Caso seu problema ainda não tenha sido documentado, crie uma nova issue para o problema. É recomendável priorizar as existentes.
* A criação de branches deve seguir a política de branches.
* O desenvolvimento deve seguir nossa política de commits.

# Políticas de branches

## main

A main é a nossa branch de produção, nela vai estar a versão estável do projeto.

## develop
A develop é a branch de desenvolvimento, é nela que onde vai ser enviado os trabalhos feitos nas branches de features, ou seja, ela possui as funcionalidades que ainda não foram publicadas e que posteriormente vão ser associadas com a **main**. É a branch onde fica o código próximo do deploy.

## branches de features

As branches de features são criadas a partir da **develop**, e servem para o desenvolvimento de features presentes nas issues do repositório. Após a conclusão da feature, ela deve ser enviada para **develop** através de um pull request.

Padrão para o nome das branches de features: XX_nome_da_issue, onde XX é o número da issue seguido pelo seu nome.

## branches de hotfix 

As branches de hotfix são criadas a partir da **main** para resolver de forma rápida algum bug ou pequenos erros em produção. Ela deve seguir o seguinde padrão: hotfix_nome_do_bug.

# Políticas de commit

Os commits devem descrever de forma simples e clara o que foi feito. E devem ser escritos em português para compreensão de todos.

## Commit com vários autores
Caso esteja utilizando a técnica pair programming deve-se especificar todos os autores envolvidos. Para isso é necessário utilizar a tag co-authored-by, seguindo os passos a baixo:

1 - Após o comando git add para adicionar as alterações, execute o comando git commit.

2 - Logo após o comando anterior abrirá um editor de texto. Na primeira linha digite a mensagem do commit, depois pule duas linhas e adicione a co-autoria.

3 - Depois disso é só salvar e o commit irá para o GitHub.

Caso tenha ficado com dúvidas com os passos, veja a documentação do GitHub sobre [commits com mais de um autor](https://docs.github.com/pt/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
).

