# API NodeJS + GraphQL + Mongoose

API criada a partir de um template para simular um banco de dados que realiza um CRUD de livros.

Foi utilizada com o `find-book-webapp` presente em:
https://github.com/Jorge-Neto/find-book-webapp

## Requisitos

- NodeJS LTS (ou superior)
- Postgres/MongoDB/Redis
- Docker (opcional)

### Executando o Docker via Compose

O arquivo `docker-compose.yml` já contém a imagens para sistemas de banco de dados Postgres, MongoDB e Redis, com seus devidos sistemas de administração.

Para subir as imagens execute o comando no projeto:

```bash
$ docker-compose up
```

##### MongoDB

Painel de Administração:

- Administração: http://localhost:8001

Banco de Dados:

- Usuário: `root`
- Senha: `secret`
