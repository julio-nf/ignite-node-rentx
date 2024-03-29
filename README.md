# Rentx

API para aluguel de carros, criado durante o Bootcamp Ignite de Node.js da Rocketseat, ministrado pela professora Daniele Evangelista.

## Requisitos da aplicação

### Cadastro de carro

- **Requisitos funcionais:**

  - Deve ser possível cadastrar um novo carro;

- **Regras de negócio:**
  - Não deve ser possível cadastrar um carro com uma placa já existente;
  - O carro deve ser cadastrado, por padrão, com disponibilidade;
  - O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros

- **Requisitos funcionais:**

  - Deve ser possível listar todos os carros disponíveis.
  - Deve ser possível listar todos os carros disponíveis pelo nome da categoria;
  - Deve ser possível listar todos os carros disponíveis pelo nome da marca;
  - Deve ser possível listar todos os carros disponíveis pelo nome do carro;

- **Regras de negócio:**
  - O usuário não precisa estar logado no sistema.

### Cadastro de especificação no carro

- **Requisitos funcionais:**

  - Deve ser possível cadastrar uma especificação para um carro;
  - Deve ser possível listar todas as especificações;
  - Deve ser possível listas todos os carros.

- **Regras de negócio:**
  - Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
  - Não deve ser possível cadastrar uma especificação já existente para o carro.
  - O usuário responsável pelo cadastro deve ser um usuário administrador.

### Cadastro de imagens do carro

- **Requisitos funcionais:**

  - Deve ser possível a imagem do carro;
  - Deve ser possível listar todos os carros.

- **Requisitos não funcionais:**

  - Utilizar o multer para o upload dos arquivos.

- **Regras de negócio:**
  - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
  - O usuário responsável pelo cadastro deve ser um usuário administrador.

### Aluguel de carro

- **Requisitos funcionais:**

  - Deve ser possível cadastrar um aluguel;
  - Deve ser possível listar todos os carros.

- **Regras de negócio:**
  - O aluguel deve ter duração mínima de 24 (vinte e quatro) horas;
  - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
  - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
