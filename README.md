
# Tag 1.0.1 - Inicialização do npm e Configuração do `package.json`

Nesta etapa, damos continuidade ao desenvolvimento da aplicação iniciado na **Tag 1.0.1**, avançando com a configuração do npm e a descrição inicial do projeto no arquivo `package.json`. Além disso, configuramos a persistência de dados para serviços e dependências locais.

## Configurações Realizadas

### 1. Inicialização do Ambiente Docker
- Os serviços Docker foram iniciados, criando o volume **`node_modules`**, que garante a persistência das dependências instaladas localmente.
- O arquivo `docker-compose.yml` foi configurado para que a pasta **`app`** seja montada dentro do container.

### 2. Acesso ao Container
O acesso ao container foi realizado com o seguinte comando:
```bash
docker exec -it nodeExpo sh
```
Este comando permite abrir um terminal interativo dentro do container chamado `nodeExpo`, possibilitando a execução de comandos no ambiente configurado.

### 3. Execução do Comando `npm init`
Dentro do container, foi executado o comando:
```bash
npm init
```
Este comando iniciou um processo interativo no terminal, solicitando informações para configurar o arquivo `package.json`. Os dados fornecidos incluem:
- **Nome do projeto**;
- **Versão inicial**;
- **Descrição**;
- **Autor**.

Caso prefira uma configuração padrão, o comando pode ser executado com a flag `-y`, como mostrado abaixo:
```bash
npm init -y
```

### 4. Persistência de Dependências e Serviços Locais
Com a configuração inicial concluída, o serviço npm foi devidamente ativado, permitindo a instalação de novos pacotes e serviços recomendados pela equipe do React.

A persistência é garantida pelo volume **`node_modules`**, que sincroniza as dependências instaladas com a pasta do projeto no host. Isso assegura que qualquer instalação futura de pacotes locais seja mantida no ambiente de desenvolvimento.

## Resultado
Com esta etapa, o ambiente está preparado para:
- Adicionar novas dependências ao projeto com o comando `npm install`.
- Garantir que as configurações do projeto sejam refletidas no arquivo `package.json`.

A **Tag 1.0.1** marca a consolidação da base para a instalação de bibliotecas e serviços adicionais, dando suporte ao crescimento contínuo do projeto.

# Observações

Ao subir o container, o volume foi configurado e criou a pasta `node_modules`. No entanto, essa pasta estará vazia inicialmente, pois o comando `npm init` foi executado e o arquivo `package.json` foi criado, mas ainda não há módulos instalados.

A pasta `node_modules` só passará a conter as dependências e os módulos necessários quando o serviço for iniciado, o que ocorrerá na **Tag 1.0.2**, com a execução de novos comandos para instalar as dependências e inicializar os pacotes necessários ao projeto.

Na pasta node modules tem um arquivo info.md que contem o escopo acima. Na aplicação tag 1.0.3 ela não estará, pois foi criado para manter a pasta node_modules para manter a didática da evolução.

---

# Tag 1.0.0 - Ambiente Inicial

## Descrição

Esta é a **Tag 1.0.0**, que marca a criação do ambiente inicial do projeto, utilizando **Docker** para a construção de uma aplicação **React Native**. O ambiente integra os serviços **Node.js** e **JDK**, permitindo o desenvolvimento de forma isolada e controlada.

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

Esta **Tag 1.0.0** representa o ponto de partida. A partir deste momento, o projeto será evoluído para novas versões (como a **Tag 1.0.1**), com a adição de novas funcionalidades e dependências.
