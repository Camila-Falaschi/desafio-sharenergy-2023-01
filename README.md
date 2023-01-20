# Desafio para o processo seletivo SHARENERGY 2023/01

Repositório destinado a aplicação desenvolvida pela aplicante Camila Falaschi para o desafio do processo seletivo da SHARENERGY 2023/01.


# Estrutura do projeto

<details>
  <summary><strong> Banco de Dados</strong></summary><br />

  - O banco de dados foi criado utilizando o MongoDB e a biblioteca Mongoose.
  - Ele possui a finalidade de fornecer dados para o serviço de backend.

</details>

<details>
  <summary><strong> Backend</strong></summary><br />

  - O backend foi desenvolvido e estruturado com arquitetura de software baseada em camadas dividas em três partes: Model, Service e Controller.
  - É possível verificar e testar as rotas da aplicação importando a coleção disponível no arquivo `thunder-collection_Sharenergy-challange.json` utilizando a extensão do ThunderClient no Visual Studio Code.

</details>

<details>
  <summary><strong> Frontend</strong></summary><br />

  - O fronted utiliza a biblioteca React e o pacote react-router-dom junto ao TypeScript, ademais usa o Context API do React para a criação de estados na aplicação.
  - Para a conexão do backend com o frontend foi planejado o uso do cliente HTTP Axios, porém o mesmo não pode ser conectado com sucesso. 

</details>

<details>
  <summary><strong> Docker</strong></summary><br />

  - O arquivo `docker-compose.yml` na pasta `./app` possui a responsabilidade de unir todos os serviços conteinerizados (frontend, backend e database).
  - Ambas as pastas frontend e backend possuem um 'Dockerfile' para incialização da aplicação.

</details>


# Orientações

<details>
  <summary><strong> Configurações mínimas para execução do projeto</strong></summary><br />

  - Node
  - Docker
  - Docker-compose

</details>

<details>
  <summary><strong> Instalação do projeto</strong></summary><br />
  
  1. Clone o projeto em sua máquina
  2. Entre na pasta `app`
  3. Instale as dependências `npm install`
  
</details>

<details>
  <summary><strong> Inicialização</strong></summary><br />
  O frontend irá rodar na porta 3000 e backend na 3001.

  1. Na pasta `app`, rode o comando `docker-compose up -d --build`
      - em caso que ocorra um erro e não seja possível inicializar os containers de frontend ou backend, utilize apenas o container `mongodb_database`.
      - nesse caso na pasta de frontend rode no terminal o comando `npm start` e na de backend `npm run dev`.
  2. Entre no ternimal dos containers de frontend e backend
      - `docker exec -it sharenergy_challange_app_frontend sh` e `docker exec -it sharenergy_challange_app_backend sh` respectivamente.
  3. No terminal do container de frontend rode o comando `npm start` e no de backend `npm run dev`.
  
</details>


# Mais informações

## Apresentação do projeto

<a href="" target="blank">Link para o vídeo no YouTube</a>


## Design da Aplicação

Foi planejado as páginas, componentes e aparência do projeto antes de ser iniciado o seu desenvolvimento, e para isso foi montado um modelo no Figma.

<a href="https://www.figma.com/file/YHKV3GBxxThQZsE2DEDoTz/App-desafio-sharenergy-2023-01?node-id=10%3A34&t=IUVnPFxNupbDRfLu-1" target="blank">Link para o modelo do Figma</a>

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYHKV3GBxxThQZsE2DEDoTz%2FApp-desafio-sharenergy-2023-01%3Fnode-id%3D10%253A34%26t%3DIUVnPFxNupbDRfLu-1" allowfullscreen></iframe>


## Melhorias para o projeto

- Um dos desafios encontratos durante o desenvolvimento do projeto foi o erro CORS policy, por isso como ponto a melhorar será realizar a conexão das APIs sem que o erro ocorra.
- A autenticação do usuário durante o login na aplicação está utilizando o Context API, desta forma como melhoria será utilizar o JSON Web Token para maior segurança.
- E consertar os erros de conexão Axios ao banco de dados.
