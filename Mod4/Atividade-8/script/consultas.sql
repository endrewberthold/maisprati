-- Listagem do cardápio ordenada por nome
SELECT c.id_cardapio, c.nome_item, c.descricao,c.preco_unit
FROM cardapio c
ORDER BY nome_item;

-- Listagem das comandas com itens detalhados
SELECT
    c.id_comanda,
    c.data,
    c.nr_mesa,
    c.nome_cliente,
    ic.id_cardapio,
    cd.nome_item AS cafe,
    cd.descricao,
    ic.quantidade,
    cd.preco_unit,
    (ic.quantidade * cd.preco_unit) AS preco_total
FROM comanda c
         JOIN item_comanda ic ON c.id_comanda = ic.id_comanda
         JOIN cardapio cd ON ic.id_cardapio = cd.id_cardapio
ORDER BY c.data, c.id_comanda, cd.nome_item;

-- Listagem das comandas com valor total
SELECT
    c.id_comanda,
    c.data,
    c.nr_mesa,
    c.nome_cliente,
    SUM(ic.quantidade * cd.preco_unit) AS valor_total_comanda
FROM comanda c
         JOIN item_comanda ic ON c.id_comanda = ic.id_comanda
         JOIN cardapio cd ON ic.id_cardapio = cd.id_cardapio
GROUP BY c.id_comanda, c.data, c.nr_mesa, c.nome_cliente
ORDER BY c.data;

-- Comandas com mais de um tipo de café
SELECT
    c.id_comanda,
    c.data,
    c.nr_mesa,
    c.nome_cliente,
    SUM(ic.quantidade * cd.preco_unit) AS total_comanda
FROM comanda c
         JOIN item_comanda ic ON c.id_comanda = ic.id_comanda
         JOIN cardapio cd ON ic.id_cardapio = cd.id_cardapio
GROUP BY c.id_comanda, c.data, c.nr_mesa, c.nome_cliente
HAVING COUNT(DISTINCT ic.id_cardapio) > 1
ORDER BY c.data;

-- Total de faturamento por data
SELECT
    c.data,
    SUM(ic.quantidade * cd.preco_unit) AS faturamento_total
FROM comanda c
         JOIN item_comanda ic ON c.id_comanda = ic.id_comanda
         JOIN cardapio cd ON ic.id_cardapio = cd.id_cardapio
GROUP BY c.data
ORDER BY c.data;