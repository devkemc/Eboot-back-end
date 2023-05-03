-- CreateEnum
CREATE TYPE "BandeirasCartao" AS ENUM ('VISA', 'MASTERCARD', 'ELO');

-- CreateEnum
CREATE TYPE "TiposTelefone" AS ENUM ('CELULAR', 'FIXO');

-- CreateEnum
CREATE TYPE "TiposImovel" AS ENUM ('COMERCIAL', 'RESIDENCIAL');

-- CreateEnum
CREATE TYPE "TiposEndereco" AS ENUM ('COBRANCA', 'ENTREGA');

-- CreateEnum
CREATE TYPE "TiposLogradouro" AS ENUM ('RUA', 'AVENIDA', 'PRACA', 'ESTRADA');

-- CreateEnum
CREATE TYPE "StatusPedidos" AS ENUM ('REALIZADO', 'CANCELADO', 'PAGO', 'ENVIADO', 'ENTREGUE');

-- CreateEnum
CREATE TYPE "StatusItemPedido" AS ENUM ('DEVOLVIDO', 'TROCADO', 'ENTREGUE');

-- CreateTable
CREATE TABLE "Pessoas" (
    "pes_id" SERIAL NOT NULL,
    "pes_nome" VARCHAR(100) NOT NULL,
    "pes_sobrenome" VARCHAR(100) NOT NULL,
    "pes_email" VARCHAR(100) NOT NULL,
    "pes_senha" VARCHAR(255) NOT NULL,
    "pes_admin" BOOLEAN NOT NULL,
    "pes_dataNascimento" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pes_genero" VARCHAR(20) NOT NULL,
    "pes_cpf" TEXT NOT NULL,
    "pes_tipo_fone" "TiposTelefone" NOT NULL,
    "pes_ddd" INTEGER NOT NULL,
    "pes_numero" INTEGER NOT NULL,
    "pes_isActive" BOOLEAN NOT NULL,
    "pes_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pes_updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pessoas_pkey" PRIMARY KEY ("pes_id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "pes_id" INTEGER NOT NULL,
    "ranking" INTEGER NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("pes_id")
);

-- CreateTable
CREATE TABLE "Cartoes" (
    "crt_id" SERIAL NOT NULL,
    "crt_bandeira" "BandeirasCartao" NOT NULL,
    "crt_numero_cartao" DOUBLE PRECISION NOT NULL,
    "crt_nome_impresso" VARCHAR(100) NOT NULL,
    "crt_cod_seguranca" INTEGER NOT NULL,
    "cliente_id" INTEGER,

    CONSTRAINT "Cartoes_pkey" PRIMARY KEY ("crt_id")
);

-- CreateTable
CREATE TABLE "Cupons" (
    "cup_id" SERIAL NOT NULL,
    "cup_valor" DOUBLE PRECISION NOT NULL,
    "cup_ativo" BOOLEAN NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "cup_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cup_updateAt" TIMESTAMP(3) NOT NULL,
    "cup_data_vencimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cupons_pkey" PRIMARY KEY ("cup_id")
);

-- CreateTable
CREATE TABLE "Enderecos" (
    "end_id" SERIAL NOT NULL,
    "end_tipo_imovel" "TiposImovel" NOT NULL,
    "end_tipo_endereco" "TiposEndereco" NOT NULL,
    "end_tipo_logradouro" "TiposLogradouro" NOT NULL,
    "end_logradouro" TEXT NOT NULL,
    "end_numero" TEXT NOT NULL,
    "end_bairro" TEXT NOT NULL,
    "end_cep" INTEGER NOT NULL,
    "pessoa_id" INTEGER NOT NULL,
    "cidade_id" INTEGER NOT NULL,

    CONSTRAINT "Enderecos_pkey" PRIMARY KEY ("end_id")
);

-- CreateTable
CREATE TABLE "Cidades" (
    "cid_id" SERIAL NOT NULL,
    "cid_nome" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,

    CONSTRAINT "Cidades_pkey" PRIMARY KEY ("cid_id")
);

-- CreateTable
CREATE TABLE "Estados" (
    "est_id" SERIAL NOT NULL,
    "est_nome" TEXT NOT NULL,

    CONSTRAINT "Estados_pkey" PRIMARY KEY ("est_id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "cat_id" SERIAL NOT NULL,
    "cat_nome" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("cat_id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "prod_id" SERIAL NOT NULL,
    "prod_nome" TEXT NOT NULL,
    "prod_descricao" TEXT NOT NULL,
    "prod_url_foto1" TEXT NOT NULL,
    "prod_url_foto2" TEXT NOT NULL,
    "prod_url_foto3" TEXT NOT NULL,
    "prod_quantidade_total" INTEGER NOT NULL,
    "prod_preco" DOUBLE PRECISION NOT NULL,
    "prod_status" BOOLEAN NOT NULL,
    "prod_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prod_updateAt" TIMESTAMP(3) NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("prod_id")
);

-- CreateTable
CREATE TABLE "Tamanhos" (
    "tam_id" SERIAL NOT NULL,
    "tam_tamanho" INTEGER NOT NULL,

    CONSTRAINT "Tamanhos_pkey" PRIMARY KEY ("tam_id")
);

-- CreateTable
CREATE TABLE "ProdutosTamanhos" (
    "quantidade" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "tamanho_id" INTEGER NOT NULL,

    CONSTRAINT "ProdutosTamanhos_pkey" PRIMARY KEY ("produto_id","tamanho_id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "ped_id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "ped_valor_total" DOUBLE PRECISION NOT NULL,
    "ped_valor_frete_total" DOUBLE PRECISION NOT NULL,
    "ped_desconto" DOUBLE PRECISION NOT NULL,
    "ped_status" "StatusPedidos" NOT NULL,
    "ped_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ped_updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("ped_id")
);

-- CreateTable
CREATE TABLE "FormaPagamento" (
    "fpag_id" SERIAL NOT NULL,
    "fpag_valor" DOUBLE PRECISION NOT NULL,
    "cuponsCup_id" INTEGER,
    "cartoesCrt_id" INTEGER,

    CONSTRAINT "FormaPagamento_pkey" PRIMARY KEY ("fpag_id")
);

-- CreateTable
CREATE TABLE "PagamentoCupom" (
    "pcu_id" INTEGER NOT NULL,
    "cupom_id" INTEGER NOT NULL,

    CONSTRAINT "PagamentoCupom_pkey" PRIMARY KEY ("pcu_id")
);

-- CreateTable
CREATE TABLE "PagamentoCartao" (
    "pcu_id" INTEGER NOT NULL,
    "cartao_id" INTEGER NOT NULL,

    CONSTRAINT "PagamentoCartao_pkey" PRIMARY KEY ("pcu_id")
);

-- CreateTable
CREATE TABLE "ItensPedido" (
    "iped_id" SERIAL NOT NULL,
    "iped_valor_frete" DOUBLE PRECISION NOT NULL,
    "iped_quantidade" INTEGER NOT NULL,
    "iped_valor_total" DOUBLE PRECISION NOT NULL,
    "iped_status" "StatusItemPedido" NOT NULL,
    "iped_tamanho" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "pedido_id" INTEGER NOT NULL,

    CONSTRAINT "ItensPedido_pkey" PRIMARY KEY ("iped_id")
);

-- CreateTable
CREATE TABLE "ItensCarrinho" (
    "icar_id" SERIAL NOT NULL,
    "icar_quantidade" INTEGER NOT NULL,
    "icar_valor_total" DOUBLE PRECISION NOT NULL,
    "icar_tamanho" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "carrinho_id" INTEGER NOT NULL,

    CONSTRAINT "ItensCarrinho_pkey" PRIMARY KEY ("icar_id")
);

-- CreateTable
CREATE TABLE "Carrinhos" (
    "car_id" SERIAL NOT NULL,
    "icar_valor_total" DOUBLE PRECISION NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "Carrinhos_pkey" PRIMARY KEY ("car_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoas_pes_email_key" ON "Pessoas"("pes_email");

-- CreateIndex
CREATE UNIQUE INDEX "Pessoas_pes_cpf_key" ON "Pessoas"("pes_cpf");

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_pes_id_fkey" FOREIGN KEY ("pes_id") REFERENCES "Pessoas"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cartoes" ADD CONSTRAINT "Cartoes_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Clientes"("pes_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cupons" ADD CONSTRAINT "Cupons_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "Pessoas"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "Cidades"("cid_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidades" ADD CONSTRAINT "Cidades_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "Estados"("est_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categorias"("cat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosTamanhos" ADD CONSTRAINT "ProdutosTamanhos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosTamanhos" ADD CONSTRAINT "ProdutosTamanhos_tamanho_id_fkey" FOREIGN KEY ("tamanho_id") REFERENCES "Tamanhos"("tam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormaPagamento" ADD CONSTRAINT "FormaPagamento_cuponsCup_id_fkey" FOREIGN KEY ("cuponsCup_id") REFERENCES "Cupons"("cup_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormaPagamento" ADD CONSTRAINT "FormaPagamento_cartoesCrt_id_fkey" FOREIGN KEY ("cartoesCrt_id") REFERENCES "Cartoes"("crt_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagamentoCupom" ADD CONSTRAINT "PagamentoCupom_pcu_id_fkey" FOREIGN KEY ("pcu_id") REFERENCES "FormaPagamento"("fpag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagamentoCupom" ADD CONSTRAINT "PagamentoCupom_cupom_id_fkey" FOREIGN KEY ("cupom_id") REFERENCES "Cupons"("cup_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagamentoCartao" ADD CONSTRAINT "PagamentoCartao_pcu_id_fkey" FOREIGN KEY ("pcu_id") REFERENCES "FormaPagamento"("fpag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagamentoCartao" ADD CONSTRAINT "PagamentoCartao_cartao_id_fkey" FOREIGN KEY ("cartao_id") REFERENCES "Cartoes"("crt_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensPedido" ADD CONSTRAINT "ItensPedido_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensPedido" ADD CONSTRAINT "ItensPedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedidos"("ped_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensCarrinho" ADD CONSTRAINT "ItensCarrinho_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensCarrinho" ADD CONSTRAINT "ItensCarrinho_carrinho_id_fkey" FOREIGN KEY ("carrinho_id") REFERENCES "Carrinhos"("car_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinhos" ADD CONSTRAINT "Carrinhos_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;
