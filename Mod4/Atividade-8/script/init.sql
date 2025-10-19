CREATE TABLE comanda (
    id_comanda INT PRIMARY KEY NOT NULL ,
    data DATE NOT NULL,
    nr_mesa INT NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE cardapio (
    id_cardapio INT PRIMARY KEY NOT NULL,
    nome_item VARCHAR(100) UNIQUE NOT NULL,
    descricao TEXT,
    preco_unit DECIMAL(10, 2) NOT NULL
);

CREATE TABLE item_comanda (
    id_item_comanda SERIAL PRIMARY KEY,
    quantidade INT NOT NULL,
    id_comanda INT NOT NULL,
    id_cardapio INT NOT NULL,
    FOREIGN KEY (id_comanda) REFERENCES comanda(id_comanda),
    FOREIGN KEY (id_cardapio) REFERENCES cardapio(id_cardapio)
);

INSERT INTO cardapio (id_cardapio, nome_item, descricao, preco_unit) VALUES
                                                                         (1, 'Café Expresso', 'Café preto tradicional', 5.00),
                                                                         (2, 'Cappuccino', 'Café com leite e espuma de leite', 8.50),
                                                                         (3, 'Latte', 'Café com bastante leite vaporizado', 9.00),
                                                                         (4, 'Mocha', 'Café com chocolate e leite', 10.00),
                                                                         (5, 'Americano', 'Café preto mais diluído', 4.50);
INSERT INTO comanda (id_comanda, data, nr_mesa, nome_cliente) VALUES
                                                                  (1, '2025-10-18', 1, 'Ana Silva'),
                                                                  (2, '2025-10-18', 2, 'Bruno Costa'),
                                                                  (3, '2025-10-19', 3, 'Carlos Souza');
INSERT INTO item_comanda (quantidade, id_comanda, id_cardapio) VALUES
                                                                   (2, 1, 1),
                                                                   (1, 1, 2),
                                                                   (1, 2, 3),
                                                                   (2, 2, 1),
                                                                   (1, 3, 4),
                                                                   (3, 3, 5);