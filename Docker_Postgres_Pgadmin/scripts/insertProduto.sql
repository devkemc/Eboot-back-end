

INSERT INTO public."Categorias"(cat_nome) --Categoria Masculino
VALUES ("Masculino");

INSERT INTO public."Categorias"(cat_nome) --Categoria Feminino
VALUES ("Feminino");

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (35);

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (36);

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (37);

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (38);

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (39);

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (40);

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (41);

INSERT INTO public."Tamanhos"(tam_tamanho)
VALUES (42);

-- Produto1
INSERT INTO public."Produtos"(prod_nome, prod_descricao, prod_url_foto1, prod_url_foto2, prod_url_foto3,
                              prod_preco, prod_status, "prod_createdAt", "prod_updateAt", categoria_id)
VALUES ('Tênis Revolution',
        'O Nike Revolution possui cabedal leve em mesh, interior acolchoado e entressola em EVA que auxilia na absorção de impactos. O solado emborrachado e antiderrapante conta com ranhuras que transmite maior segurança e estabilidade ao caminhar. Fechamento em cadarço. Modelo ideal para quem quer liberdade, leveza e conforto no dia a dia.',
        '../../assets/Imagens/id1_img1.png',
        '../../assets/Imagens/id1_img2.png',
        '../../assets/Imagens/id1_img3.png',
        249.99,
        True,
        now(),
        now(),
        1);
-- Tamanhos do Produto1
INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 1, 3);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 1, 4);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 1, 5);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (20, 1, 7);

-- Produto2
INSERT INTO public."Produtos"(prod_nome, prod_descricao, prod_url_foto1, prod_url_foto2, prod_url_foto3, prod_preco,
                              prod_status, "prod_createdAt", "prod_updateAt", categoria_id)
VALUES ('Tênis Masculino Mizuno Wave Creation 23',
        'Um dos tênis de corrida mais duradouros da história de MIZUNO. Tênis de corrida de resistência com o icônico Infinity Wave da MIZUNO. Tecnologia: U4icX, evolução do U4IC, sendo mais leve e mais macio, proporcionando maior conforto durante a corrida. Mizuno Enerzy, EVA leve e macio com maior índice de amortecimento e retorno de energia. X10, Composto de borracha e carbono que oferece maior durabilidade e aderência ao solado na entrada da pisada.',
        '../../assets/Imagens/id2_img1.png',
        '../../assets/Imagens/id2_img2.png',
        '../../assets/Imagens/id2_img3.png',

        749.99,
        True,
        now(),
        now(),
        1);

-- Tamanhos do produto2
INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (20, 2, 2);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 2, 8);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 2, 5);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (20, 2, 7);


-- Produto3
INSERT INTO public."Produtos"(prod_nome, prod_descricao, prod_url_foto1, prod_url_foto2, prod_url_foto3,
                              prod_preco, prod_status, "prod_createdAt", "prod_updateAt", categoria_id)
VALUES ('Tênis de Corrida Feminino Mizuno Wave Stratos',
        'O Mizuno Wave Stratos possui as tecnologias Mizuno Wave, Placa WAVE em TPU que proporciona maior estabilidade e absorção de impacto. X10, Composto de borracha e carbono que oferece maior durabilidade e aderência ao solado na entrada da pisada.',
        '../../assets/Imagens/id3_img1.png',
        '../../assets/Imagens/id3_img2.png',
        '../../assets/Imagens/id3_img3.png',

        799.99,
        True,
        now(),
        now(),
        2);
-- Tamanhos do produto 3
INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (20, 3, 2);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 3, 8);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 3, 5);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (20, 3, 7);


-- Produto4
INSERT INTO public."Produtos"(prod_nome, prod_descricao, prod_url_foto1, prod_url_foto2, prod_url_foto3,
                              prod_preco, prod_status, "prod_createdAt", "prod_updateAt", categoria_id)
VALUES ('Tênis Nike Air Max Excee Masculino',
        'Conte com a Nike para turbinar seu streetwear! Com design moderno e autêntico, o Tênis Nike Air Max Excee é para o homem que busca conforto e estilo nas suas combinações urbanas. Confeccionado em material leve e resistente, esse calçado de design robusto garante respirabilidade e durabilidade para te acompanhar em todas as situações. Peça já o tênis masculino da marca que você confia!',
        '../../assets/Imagens/id4_img1.png',
        '../../assets/Imagens/id4_img2.png',
        '../../assets/Imagens/id4_img3.png',
        399.99,
        True,
        now(),
        now(),
        1);
-- Tamanhos produto 4
INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (30, 4, 2);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 4, 8);

INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (10, 4, 5);


-- Produto5
INSERT INTO public."Produtos"(prod_nome, prod_descricao, prod_url_foto1, prod_url_foto2, prod_url_foto3,
                               prod_preco, prod_status, "prod_createdAt", "prod_updateAt", categoria_id)
VALUES ('Tênis Nike Downshifter 12 Feminino',
        'Para garantir conforto e qualidade nas suas corridas diárias, aposte no Tênis Running Nike Downshifter 12! Indicado para quem está iniciando os treinos de running, caminhada e crossfit, o calçado desenvolvido em material leve e resistente, possui cabedal têxtil respirável, e bico mais fino, por isso compre um número acima do que costuma usar. O tênis Nike conta com faixa de ajuste no mediopé que, se usada em conjunto com sua amarração em cadarço, proporciona mais firmeza e suporte aos pés. Entressola em espuma macia e elevada, conferindo amortecimento e uma sensação suave em cada passada. Solado emborrachado para criar tração e dar aderência a calçadas, ruas e esteiras. O tênis feminino da Nike possui ainda logo Downshifter 12 na lingueta e o icônico Swoosh na lateral. Esse tênis de corrida dá continuidade à jornada da Nike pela sustentabilidade, em um design feito com pelo menos 20% de conteúdo reciclado por peso. Invista e torne seus treinos ainda melhores!',
        '../../assets/Imagens/id5_img1.png',
        '../../assets/Imagens/id5_img2.png',
        '../../assets/Imagens/id5_img3.png',
        229.99,
        True,
        now(),
        now(),
        2); --Categoria 2 é Feminino
-- Tamanhos produto 5
INSERT INTO public."ProdutosTamanhos"(
        quantidade, produto_id, tamanho_id)
VALUES (50, 5, 2);
