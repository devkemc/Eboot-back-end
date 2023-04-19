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

-- CreateTable
CREATE TABLE "Pessoas" (
    "pes_id" SERIAL NOT NULL,
    "pes_nome" VARCHAR(100) NOT NULL,
    "pes_sobrenome" VARCHAR(100) NOT NULL,
    "pes_dataNascimento" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pes_genero" VARCHAR(20) NOT NULL,
    "pes_cpf" TEXT NOT NULL,
    "pes_tipo" "TiposTelefone" NOT NULL,
    "pes_ddd" INTEGER NOT NULL,
    "pes_numero" INTEGER NOT NULL,
    "pes_isActive" BOOLEAN NOT NULL,
    "pes_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pes_updateAt" TIMESTAMP(3) NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "Pessoas_pkey" PRIMARY KEY ("pes_id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "pes_id" INTEGER NOT NULL,
    "ranking" DOUBLE PRECISION,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("pes_id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "user_id" SERIAL NOT NULL,
    "user_email" VARCHAR(100) NOT NULL,
    "user_senha" VARCHAR(255) NOT NULL,
    "user_admin" BOOLEAN NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("user_id")
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
    "prod_quantidade" INTEGER NOT NULL,
    "prod_preco" DOUBLE PRECISION NOT NULL,
    "prod_status" BOOLEAN NOT NULL,
    "prod_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prod_updateAt" TIMESTAMP(3) NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("prod_id")
);

-- CreateTable
CREATE TABLE "Calcados" (
    "prod_id" INTEGER NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Calcados_pkey" PRIMARY KEY ("prod_id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "ped_id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "ped_valor_total" DOUBLE PRECISION NOT NULL,
    "ped_valor_frete" DOUBLE PRECISION NOT NULL,
    "ped_desconto" DOUBLE PRECISION NOT NULL,
    "ped_status" "StatusPedidos" NOT NULL,
    "ped_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ped_updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("ped_id")
);

-- CreateTable
CREATE TABLE "ProdutosPedidos" (
    "produto_id" INTEGER NOT NULL,
    "pedido_id" INTEGER NOT NULL,

    CONSTRAINT "ProdutosPedidos_pkey" PRIMARY KEY ("produto_id","pedido_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoas_pes_cpf_key" ON "Pessoas"("pes_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Pessoas_usuario_id_key" ON "Pessoas"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_user_email_key" ON "Usuarios"("user_email");

-- AddForeignKey
ALTER TABLE "Pessoas" ADD CONSTRAINT "Pessoas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_pes_id_fkey" FOREIGN KEY ("pes_id") REFERENCES "Pessoas"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cartoes" ADD CONSTRAINT "Cartoes_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Clientes"("pes_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "Pessoas"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "Cidades"("cid_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidades" ADD CONSTRAINT "Cidades_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "Estados"("est_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categorias"("cat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calcados" ADD CONSTRAINT "Calcados_prod_id_fkey" FOREIGN KEY ("prod_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosPedidos" ADD CONSTRAINT "ProdutosPedidos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosPedidos" ADD CONSTRAINT "ProdutosPedidos_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedidos"("ped_id") ON DELETE RESTRICT ON UPDATE CASCADE;
