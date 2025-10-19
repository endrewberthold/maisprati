## Sistema de Controle de Vendas – Cafeteria BomGosto

Este repositório contém os scripts SQL para criação e consulta do banco de dados da Cafeteria BomGosto. O objetivo é registrar e consultar as vendas de cafés realizadas por meio de comandas.

### Estrutura do Repositório

```tree
script/
|    ├── init.sql
|    └── consultas.sql
└──README.md   
```
### Descrição dos Arquivos

#### init.sql
- Contém os comandos CREATE TABLE para definir as tabelas comanda, cardapio e item_comanda, além de alguns registros de exemplo (INSERT INTO) para testes.

#### consultas.sql
- Inclui as consultas SQL referentes às seguintes tarefas:

1. Listagem do cardápio ordenada por nome.

2. Listagem das comandas e seus itens detalhados.

3. Listagem das comandas com o valor total.

4. Listagem das comandas com mais de um tipo de café.

5. Faturamento total por data.

### Como Utilizar

1. Crie o banco de dados

```sql
CREATE DATABASE bom_gosto;
```

2. Acesse o banco

```bash
  \c bom_gosto
```

3. Execute o sript de inicialização

```bash
  psql -U seu_usuario -d bom_gosto -f script/init.sql
```

4. Execute as consultas

```bash
  psql -U seu_usuario -d bom_gosto -f script/consultas.sql
```

Ou, se preferir, copie cada consulta do arquivo consultas.sql e execute diretamente no cliente SQL de sua preferência (por exemplo: DBeaver, pgAdmin, MySQL Workbench, etc.).

### Requisitos

- Banco de dados compatível com SQL padrão (PostgreSQL ou MySQL).

- Usuário com permissão para criar e manipular tabelas.

### Observações

- O script init.sql pode ser executado várias vezes se o banco for recriado.

- Todos os id são numéricos e seguem incrementação simples para facilitar os testes.

- Os dados de exemplo são fictícios e servem apenas para demonstração das consultas.