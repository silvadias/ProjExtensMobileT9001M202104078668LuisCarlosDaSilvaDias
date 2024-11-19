# ProjExtensMobileT9001M202104078668LuisCarlosDaSilvaDias
9001 - Projeto de Extensão em Programação para Dispositivos Móveis. Desenvolvimento de aplicativo Android em React Native com propósito de avaliação acadêmica. Problema social será definido ao longo do processo, com todas as fases documentadas em relatórios detalhados.

---

# Tag 1.0.4-expoCli

Nesta etapa, o projeto foi reconfigurado, iniciando com a execução do comando `npm install expo-cli --save-dev` dentro do contêiner `nodeExpo`. A instalação local do `expo-cli` é recomendada pela React para garantir que as dependências e os serviços sejam gerenciados de forma isolada, evitando o uso de pacotes globais.

Em seguida, foi criada a aplicação com o comando `npx create-expo-app app`. Este comando gerou uma pasta contendo toda a estrutura necessária para o projeto. A partir daí, a pasta criada passou a ser a raiz do projeto, e o arquivo `docker-compose.yml` foi colocado dentro dessa pasta para facilitar a configuração do ambiente e sua execução de forma automatizada.

Foi feita uma modificação no arquivo `docker-compose.yml` para que o serviço seja iniciado automaticamente com o comando `docker-compose up -d`. Com isso, o ambiente é preparado automaticamente, rodando os comandos `npm install` e `npx expo start` para deixar tudo pronto para o desenvolvimento `localhost:8081`.

Abaixo, está a mensagem padrão no arquivo README.md do projeto, que deve ser considerada ao avançar com o projeto ou ao criar um novo projeto em branco.

# Welcome to your Expo app 👋
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

### `Atenão`
#### a máquina local pode não ter o node instalado, a utilização do docker é para não ter que instalar nada na máquina local.

siga os passos:

```
bash
sudo docker-compose up -d
sudo docker exec -it nodeExpo sh
sudo npm install
sudo npx expo start
```
### O próximo passo é adicionar pacotes para utilizar tunnelamento e poder acessar a aplicação em seu dispositivo android.

---

# Tag 1.0.3-expo - Relatório de Instalação  

## Instalação do Expo
O primeiro passo foi executar o comando para instalar o **Expo**:
```bash
npm install expo --save-dev
```

### Resultado da Instalação
Ao executar o comando, o seguinte resultado foi exibido:

```bash
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 871 packages, and audited 872 packages in 2m

72 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

---

## Avisos e Pacotes Depreciados
Durante a instalação, foram identificadas mensagens de **"deprecated"**, indicando pacotes que estão descontinuados ou que não serão suportados futuramente.

### Verificar Pacotes Depreciados
Use o comando abaixo para verificar detalhes de um pacote específico:
```bash
npm view <nome-do-pacote>
```

### Instalar Versões Específicas
É possível instalar versões não depreciadas de pacotes. Use o seguinte comando para selecionar uma versão específica:
```bash
npm install <nome-do-pacote>@<versão>
```

### Listar Versões Disponíveis
Para listar todas as versões de um pacote, execute:
```bash
npm show <nome-do-pacote> versions
```

---

## Configurando o `package.json`
Você pode evitar versões problemáticas configurando o intervalo de versões no `package.json`. Por exemplo:

```json
"dependencies": {
  "pacote": "^1.0.0"
}
```
- **`^1.0.0`**: Permite atualizações não disruptivas dentro da mesma versão principal (1.x.x).
- Use intervalos mais restritivos se necessário:
  ```json
  "dependencies": {
    "pacote": ">=1.2.0 <2.0.0"
  }
  ```

---

## Automação com `npm audit`
O comando `npm audit` ajuda a identificar pacotes desatualizados, inseguros ou depreciados:
```bash
npm audit
```

---

## Gerenciamento de Dependências Transitivas
Se um pacote depreciado for uma dependência transitiva (usado por outro pacote), use o recurso `overrides` no `package.json` para forçar o uso de uma versão compatível:
```json
"overrides": {
  "<pacote-obsoleto>": "<nova-versão>"
}
```

---

### Saída
```bash
72 packages are looking for funding
run `npm fund` for details
```

## Pacotes com Financiamento
O comando `npm fund` lista pacotes que possuem iniciativas de financiamento, como doações ou subscrições:
```bash
npm fund
```

---

## Estrutura do Projeto
Após a instalação, a pasta `node_modules` foi populada com os pacotes e dependências necessárias. Além disso:
- Foi criada a pasta `.gitignore` para evitar que a `node_modules` seja enviada ao repositório remoto, uma vez que:
  - Contém inúmeros arquivos.
  - Pode ser recriada localmente com base no `package.json` usando o comando:
    ```bash
    npm install
    ```

---

## Execução no Contêiner Docker
Para esta **Tag 1.0.3-expo**, o ambiente pode ser configurado dentro de um contêiner Docker. Use os seguintes comandos:

### Acessar o contêiner:
```bash
sudo docker exec -it nodeExpo sh
```

### Instalar dependências no contêiner:
```bash
npm install
```

---

## Conclusão
Com os passos descritos acima, o ambiente está configurado para rodar o projeto Expo, garantindo que as dependências sejam gerenciadas de forma eficaz e que problemas com pacotes depreciados sejam minimizados ou resolvidos em nas próximas tags.

### Observações

Houve um conflito entre os arquivos `package.json` e `package-lock.json` após a instalação do Expo no projeto. O problema ocorreu porque o `npm install expo --save-dev` foi executado, mas as dependências foram registradas dentro da pasta `node_modules` e não atualizaram os arquivos `package.json` e `package-lock.json` na raiz do projeto.

#### Passos para Resolver o Conflito

1. **Deletar os arquivos `package.json` e `package-lock.json` na raiz**:
   Para corrigir o problema, foi necessário deletar os arquivos `package.json` e `package-lock.json` que não foram atualizados dentro da pasta `app` do contêiner.

2. **Reinicializar o `package.json`**:
   Após a exclusão dos arquivos, o comando `npm install expo --save-dev` foi executado novamente. Isso, combinado com o comando `npm init`, gerou corretamente o arquivo `package.json` dentro da raiz do projeto, com as dependências do Expo configuradas.

3. **Execução do comando `npm install`**:
   Com o `package.json` corretamente gerado, foi executado o comando `npm install`. Esse comando então adicionou todas as dependências no arquivo `package-lock.json` na raiz, conforme esperado.

#### Atualizações no Docker Compose (YML)

Além dos ajustes no projeto, foi feito um ajuste no arquivo `docker-compose.yml`:

- O comando `npm install` foi adicionado no serviço do contêiner. Isso garante que, ao subir o contêiner na versão `1.0.3`, todos os serviços do Expo sejam configurados corretamente.

#### Expectativa

Com essas modificações, espera-se que, ao iniciar o contêiner, a pasta `node_modules` seja populada com as dependências necessárias e, ao mesmo tempo, não seja rastreada pelo Git. Isso garante que as dependências locais estejam presentes dentro do contêiner sem impactar o repositório remoto.

Agora, ao subir o contêiner, todas as dependências devem estar corretamente instaladas, e o projeto deve funcionar sem a necessidade de ajustes manuais adicionais.

---

# Tag 1.0.2 - npm install

Nesta Tag de evolução do projeto, o primeiro passo foi utilizar o comando `npm install`.

Este comando adicionou dois arquivos na estrutura de pastas, ambos chamados `package-lock.json`. Porém, um foi adicionado na estrutura da pasta `node_modules` e o outro na raiz do projeto, junto com o `package.json`.

Desta forma, o primeiro arquivo a persistir na pasta `node_modules` foi adicionado, mantendo a pasta no host, nos quais serão instalados os pacotes e serviços que funcionam como espelho no container.

Além disso, também foi realizada a atualização das tags em todos os arquivos com sufixo `package`, onde o valor da versão `1.0.1` foi substituído por `1.0.2`, uma vez que este arquivo é a evolução da tag `1.0.1`.

### O que faz o arquivo `package-lock.json` após o `npm install`?

O arquivo `package-lock.json` é criado automaticamente quando o comando `npm install` é executado. Ele serve para registrar as versões exatas das dependências que foram instaladas. O objetivo principal do `package-lock.json` é garantir que, em futuras instalações ou em outras máquinas, as mesmas versões das dependências serão instaladas, assegurando consistência no ambiente de desenvolvimento. Esse arquivo não deve ser editado manualmente, pois ele é gerado automaticamente pelo npm e deve ser mantido.

### Próximos Passos

A próxima etapa será a utilização do **Expo**, que será abordada na **Tag 1.2.3**. Esta etapa irá complementar o processo de configuração do ambiente para desenvolvimento em React Native, iniciando com a instalação do Expo e preparando o projeto para consumir e utilizar funcionalidades nativas de dispositivos móveis.

---

# Tag 1.0.1 - Inicialização do npm e Configuração do `package.json`

Nesta etapa, damos continuidade ao desenvolvimento da aplicação iniciado na **Tag 1.0.0**, avançando com a configuração do npm e a descrição inicial do projeto no arquivo `package.json`. Além disso, configuramos a persistência de dados para serviços e dependências locais.

## Configurações Realizadas

### 1. Inicialização do Ambiente Docker
- Os serviços Docker foram iniciados, criando o volume **`node_modules`**, que garante a persistência das dependências instaladas localmente, nesta faze ela foi criada vazia.
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

Na pasta node modules tem um arquivo info.md que contem o escopo acima. Na aplicação tag 1.0.2 ela não estará, pois foi criado para manter a pasta node_modules para manter a didática da evolução.

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
sudo docker-compose up -d
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

Esta **Tag 1.0.0** representa o ponto de partida. A partir deste momento, o projeto será evoluído para novas versões (como a **Tag 1.0.1**), com a adição de novas funcionalidades e dependência