
# Tag 1.0 - Ambiente Inicial

## Descrição

Esta é a **Tag 1.0**, que marca a criação do ambiente inicial do projeto, utilizando **Docker** para a construção de uma aplicação **React Native**. O ambiente integra os serviços **Node.js** e **JDK**, permitindo o desenvolvimento de forma isolada e controlada.

Neste marco, o projeto já possui a estrutura básica configurada, sendo necessário iniciar a instalação dos componentes adicionais para a evolução do sistema.

## Acesso ao Ambiente

Para interagir com os containers e começar o trabalho no projeto, siga os seguintes passos:

### 1. Acesse o container Node.js

Para acessar o container onde o serviço **Node.js** está em execução, utilize o seguinte comando:

```bash
sudo docker exec -it nodeExpo sh
```

### 2. Iniciar o npm e outros serviços

Uma vez dentro do container, será necessário inicializar o npm e os serviços relacionados. Esses serviços persistem no host através do volume compartilhado, especificamente na pasta `node_modules`, que estará sincronizada com o arquivo `package.json` que será criado durante a inicialização.

#### Criação do `package.json`

A primeira estrutura do arquivo `package.json` deve ser criada dentro do container Node.js. Isso pode ser feito de duas formas:

1. **Modo interativo (npm init)**

O comando a seguir cria o `package.json` e inicia um processo interativo, onde será solicitado o preenchimento de informações como nome, versão, descrição e autor. Isso permite personalizar o projeto conforme as necessidades.

```bash
npm init
```

2. **Modo automático (npm init -y ou npm init --yes)**

Se preferir pular as perguntas e gerar o `package.json` automaticamente com valores padrão, use a flag `-y` ou `--yes`:

```bash
npm init -y
```

## Considerações Finais

### Estrutura inicial

Após a criação do `package.json`, o ambiente estará configurado para a instalação de outros componentes da aplicação.

## Evolução do projeto

Esta **Tag 1.0** representa o ponto de partida. A partir deste momento, o projeto será evoluído para novas versões (como a **Tag 1.1**), com a adição de novas funcionalidades e dependências.
