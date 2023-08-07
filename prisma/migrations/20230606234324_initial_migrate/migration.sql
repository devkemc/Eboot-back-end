/*
  Warnings:

  - You are about to drop the column `cliente_id` on the `Carrinhos` table. All the data in the column will be lost.
  - You are about to drop the column `icar_valor_total` on the `Carrinhos` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `Cartoes` table. All the data in the column will be lost.
  - The primary key for the `Cupons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cliente_id` on the `Cupons` table. All the data in the column will be lost.
  - You are about to drop the column `cup_ativo` on the `Cupons` table. All the data in the column will be lost.
  - You are about to drop the column `cup_createdAt` on the `Cupons` table. All the data in the column will be lost.
  - You are about to drop the column `cup_data_vencimento` on the `Cupons` table. All the data in the column will be lost.
  - You are about to drop the column `cup_id` on the `Cupons` table. All the data in the column will be lost.
  - You are about to drop the column `cup_updateAt` on the `Cupons` table. All the data in the column will be lost.
  - You are about to drop the column `cup_valor` on the `Cupons` table. All the data in the column will be lost.
  - You are about to drop the column `cidade_id` on the `Enderecos` table. All the data in the column will be lost.
  - You are about to drop the column `pessoa_id` on the `Enderecos` table. All the data in the column will be lost.
  - The primary key for the `ItensPedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `iped_id` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `iped_quantidade` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `iped_status` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `iped_tamanho` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `iped_valor_frete` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `iped_valor_total` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `pedido_id` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `produto_id` on the `ItensPedido` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `Pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `endereco_id` on the `Pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `ped_valor_total` on the `Pedidos` table. All the data in the column will be lost.
  - The primary key for the `Produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoria_id` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_createdAt` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_descricao` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_id` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_nome` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_preco` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_status` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_updateAt` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_url_foto1` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_url_foto2` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `prod_url_foto3` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `Trocas` table. All the data in the column will be lost.
  - You are about to drop the column `item_pedido_id` on the `Trocas` table. All the data in the column will be lost.
  - You are about to drop the `FormaPagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PagamentoCartao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PagamentoCupom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pedidos_Forma_Pagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProdutosTamanhos` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[car_cli_id]` on the table `Carrinhos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `car_cli_id` to the `Carrinhos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crt_cli_id` to the `Cartoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpm_ativo` to the `Cupons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpm_cli_id` to the `Cupons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpm_data_vencimento` to the `Cupons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpm_updateAt` to the `Cupons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpm_valor` to the `Cupons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_cid_id` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_pes_id` to the `Enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipd_ped_id` to the `ItensPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipd_prd_id` to the `ItensPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipd_quantidade` to the `ItensPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipd_status` to the `ItensPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipd_tamanho` to the `ItensPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipd_valor_frete` to the `ItensPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipd_valor_total` to the `ItensPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ped_cli_id` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ped_end_id` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ped_valor_total_pedido` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_cat_id` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_descricao` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_nome` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_preco` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_status` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_updateAt` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_url_foto1` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_url_foto2` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prd_url_foto3` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tro_cli_id` to the `Trocas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tro_ipd_id` to the `Trocas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Carrinhos" DROP CONSTRAINT "Carrinhos_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Cartoes" DROP CONSTRAINT "Cartoes_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Cupons" DROP CONSTRAINT "Cupons_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Enderecos" DROP CONSTRAINT "Enderecos_cidade_id_fkey";

-- DropForeignKey
ALTER TABLE "Enderecos" DROP CONSTRAINT "Enderecos_pessoa_id_fkey";

-- DropForeignKey
ALTER TABLE "FormaPagamento" DROP CONSTRAINT "FormaPagamento_cartoesCrt_id_fkey";

-- DropForeignKey
ALTER TABLE "FormaPagamento" DROP CONSTRAINT "FormaPagamento_cuponsCup_id_fkey";

-- DropForeignKey
ALTER TABLE "ItensCarrinho" DROP CONSTRAINT "ItensCarrinho_produto_id_fkey";

-- DropForeignKey
ALTER TABLE "ItensPedido" DROP CONSTRAINT "ItensPedido_pedido_id_fkey";

-- DropForeignKey
ALTER TABLE "ItensPedido" DROP CONSTRAINT "ItensPedido_produto_id_fkey";

-- DropForeignKey
ALTER TABLE "PagamentoCartao" DROP CONSTRAINT "PagamentoCartao_cartao_id_fkey";

-- DropForeignKey
ALTER TABLE "PagamentoCartao" DROP CONSTRAINT "PagamentoCartao_pcu_id_fkey";

-- DropForeignKey
ALTER TABLE "PagamentoCupom" DROP CONSTRAINT "PagamentoCupom_cupom_id_fkey";

-- DropForeignKey
ALTER TABLE "PagamentoCupom" DROP CONSTRAINT "PagamentoCupom_pcu_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_endereco_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos_Forma_Pagamento" DROP CONSTRAINT "Pedidos_Forma_Pagamento_forma_pagamento_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos_Forma_Pagamento" DROP CONSTRAINT "Pedidos_Forma_Pagamento_pedido_id_fkey";

-- DropForeignKey
ALTER TABLE "Produtos" DROP CONSTRAINT "Produtos_categoria_id_fkey";

-- DropForeignKey
ALTER TABLE "ProdutosTamanhos" DROP CONSTRAINT "ProdutosTamanhos_produto_id_fkey";

-- DropForeignKey
ALTER TABLE "ProdutosTamanhos" DROP CONSTRAINT "ProdutosTamanhos_tamanho_id_fkey";

-- DropForeignKey
ALTER TABLE "Trocas" DROP CONSTRAINT "Trocas_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Trocas" DROP CONSTRAINT "Trocas_item_pedido_id_fkey";

-- DropIndex
DROP INDEX "Carrinhos_cliente_id_key";

-- AlterTable
ALTER TABLE "Carrinhos" DROP COLUMN "cliente_id",
DROP COLUMN "icar_valor_total",
ADD COLUMN     "car_cli_id" INTEGER NOT NULL,
ADD COLUMN     "car_valor_total" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Cartoes" DROP COLUMN "cliente_id",
ADD COLUMN     "crt_cli_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Cupons" DROP CONSTRAINT "Cupons_pkey",
DROP COLUMN "cliente_id",
DROP COLUMN "cup_ativo",
DROP COLUMN "cup_createdAt",
DROP COLUMN "cup_data_vencimento",
DROP COLUMN "cup_id",
DROP COLUMN "cup_updateAt",
DROP COLUMN "cup_valor",
ADD COLUMN     "cpm_ativo" BOOLEAN NOT NULL,
ADD COLUMN     "cpm_cli_id" INTEGER NOT NULL,
ADD COLUMN     "cpm_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "cpm_data_vencimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cpm_id" SERIAL NOT NULL,
ADD COLUMN     "cpm_updateAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cpm_valor" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "Cupons_pkey" PRIMARY KEY ("cpm_id");

-- AlterTable
ALTER TABLE "Enderecos" DROP COLUMN "cidade_id",
DROP COLUMN "pessoa_id",
ADD COLUMN     "end_cid_id" INTEGER NOT NULL,
ADD COLUMN     "end_pes_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ItensPedido" DROP CONSTRAINT "ItensPedido_pkey",
DROP COLUMN "iped_id",
DROP COLUMN "iped_quantidade",
DROP COLUMN "iped_status",
DROP COLUMN "iped_tamanho",
DROP COLUMN "iped_valor_frete",
DROP COLUMN "iped_valor_total",
DROP COLUMN "pedido_id",
DROP COLUMN "produto_id",
ADD COLUMN     "ipd_id" SERIAL NOT NULL,
ADD COLUMN     "ipd_ped_id" INTEGER NOT NULL,
ADD COLUMN     "ipd_prd_id" INTEGER NOT NULL,
ADD COLUMN     "ipd_quantidade" INTEGER NOT NULL,
ADD COLUMN     "ipd_status" "StatusItemPedido" NOT NULL,
ADD COLUMN     "ipd_tamanho" INTEGER NOT NULL,
ADD COLUMN     "ipd_valor_frete" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ipd_valor_total" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "ItensPedido_pkey" PRIMARY KEY ("ipd_id");

-- AlterTable
ALTER TABLE "Pedidos" DROP COLUMN "cliente_id",
DROP COLUMN "endereco_id",
DROP COLUMN "ped_valor_total",
ADD COLUMN     "ped_cli_id" INTEGER NOT NULL,
ADD COLUMN     "ped_end_id" INTEGER NOT NULL,
ADD COLUMN     "ped_valor_total_pedido" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Produtos" DROP CONSTRAINT "Produtos_pkey",
DROP COLUMN "categoria_id",
DROP COLUMN "prod_createdAt",
DROP COLUMN "prod_descricao",
DROP COLUMN "prod_id",
DROP COLUMN "prod_nome",
DROP COLUMN "prod_preco",
DROP COLUMN "prod_status",
DROP COLUMN "prod_updateAt",
DROP COLUMN "prod_url_foto1",
DROP COLUMN "prod_url_foto2",
DROP COLUMN "prod_url_foto3",
ADD COLUMN     "prd_cat_id" INTEGER NOT NULL,
ADD COLUMN     "prd_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "prd_descricao" TEXT NOT NULL,
ADD COLUMN     "prd_id" SERIAL NOT NULL,
ADD COLUMN     "prd_nome" TEXT NOT NULL,
ADD COLUMN     "prd_preco" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prd_status" BOOLEAN NOT NULL,
ADD COLUMN     "prd_updateAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "prd_url_foto1" TEXT NOT NULL,
ADD COLUMN     "prd_url_foto2" TEXT NOT NULL,
ADD COLUMN     "prd_url_foto3" TEXT NOT NULL,
ADD CONSTRAINT "Produtos_pkey" PRIMARY KEY ("prd_id");

-- AlterTable
ALTER TABLE "Trocas" DROP COLUMN "cliente_id",
DROP COLUMN "item_pedido_id",
ADD COLUMN     "tro_cli_id" INTEGER NOT NULL,
ADD COLUMN     "tro_ipd_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "FormaPagamento";

-- DropTable
DROP TABLE "PagamentoCartao";

-- DropTable
DROP TABLE "PagamentoCupom";

-- DropTable
DROP TABLE "Pedidos_Forma_Pagamento";

-- DropTable
DROP TABLE "ProdutosTamanhos";

-- CreateTable
CREATE TABLE "Estoque" (
    "etq_quantidade" INTEGER NOT NULL,
    "etq_prd_id" INTEGER NOT NULL,
    "etq_tam_id" INTEGER NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("etq_prd_id","etq_tam_id")
);

-- CreateTable
CREATE TABLE "Pagamentos" (
    "pgt_id" SERIAL NOT NULL,
    "pgt_valor_total_pago" DOUBLE PRECISION NOT NULL,
    "pgt_pds_id" INTEGER NOT NULL,

    CONSTRAINT "Pagamentos_pkey" PRIMARY KEY ("pgt_id")
);

-- CreateTable
CREATE TABLE "FormaPagamentoCartao" (
    "frp_id" SERIAL NOT NULL,
    "frp_valor" DOUBLE PRECISION NOT NULL,
    "frp_pgt_id" INTEGER NOT NULL,
    "frp_crt_id" INTEGER NOT NULL,

    CONSTRAINT "FormaPagamentoCartao_pkey" PRIMARY KEY ("frp_id")
);

-- CreateTable
CREATE TABLE "FormaPagamentoCupom" (
    "fpc_id" SERIAL NOT NULL,
    "fpc_valor" DOUBLE PRECISION NOT NULL,
    "fpc_cpm_id" INTEGER NOT NULL,
    "fpc_pgt_id" INTEGER NOT NULL,

    CONSTRAINT "FormaPagamentoCupom_pkey" PRIMARY KEY ("fpc_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pagamentos_pgt_pds_id_key" ON "Pagamentos"("pgt_pds_id");

-- CreateIndex
CREATE UNIQUE INDEX "Carrinhos_car_cli_id_key" ON "Carrinhos"("car_cli_id");

-- AddForeignKey
ALTER TABLE "Cartoes" ADD CONSTRAINT "Cartoes_crt_cli_id_fkey" FOREIGN KEY ("crt_cli_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cupons" ADD CONSTRAINT "Cupons_cpm_cli_id_fkey" FOREIGN KEY ("cpm_cli_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_end_pes_id_fkey" FOREIGN KEY ("end_pes_id") REFERENCES "Pessoas"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_end_cid_id_fkey" FOREIGN KEY ("end_cid_id") REFERENCES "Cidades"("cid_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_prd_cat_id_fkey" FOREIGN KEY ("prd_cat_id") REFERENCES "Categorias"("cat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estoque" ADD CONSTRAINT "Estoque_etq_prd_id_fkey" FOREIGN KEY ("etq_prd_id") REFERENCES "Produtos"("prd_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estoque" ADD CONSTRAINT "Estoque_etq_tam_id_fkey" FOREIGN KEY ("etq_tam_id") REFERENCES "Tamanhos"("tam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_ped_end_id_fkey" FOREIGN KEY ("ped_end_id") REFERENCES "Enderecos"("end_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_ped_cli_id_fkey" FOREIGN KEY ("ped_cli_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamentos" ADD CONSTRAINT "Pagamentos_pgt_pds_id_fkey" FOREIGN KEY ("pgt_pds_id") REFERENCES "Pedidos"("ped_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormaPagamentoCartao" ADD CONSTRAINT "FormaPagamentoCartao_frp_pgt_id_fkey" FOREIGN KEY ("frp_pgt_id") REFERENCES "Pagamentos"("pgt_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormaPagamentoCartao" ADD CONSTRAINT "FormaPagamentoCartao_frp_crt_id_fkey" FOREIGN KEY ("frp_crt_id") REFERENCES "Cartoes"("crt_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormaPagamentoCupom" ADD CONSTRAINT "FormaPagamentoCupom_fpc_pgt_id_fkey" FOREIGN KEY ("fpc_pgt_id") REFERENCES "Pagamentos"("pgt_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormaPagamentoCupom" ADD CONSTRAINT "FormaPagamentoCupom_fpc_cpm_id_fkey" FOREIGN KEY ("fpc_cpm_id") REFERENCES "Cupons"("cpm_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensPedido" ADD CONSTRAINT "ItensPedido_ipd_prd_id_fkey" FOREIGN KEY ("ipd_prd_id") REFERENCES "Produtos"("prd_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensPedido" ADD CONSTRAINT "ItensPedido_ipd_ped_id_fkey" FOREIGN KEY ("ipd_ped_id") REFERENCES "Pedidos"("ped_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensCarrinho" ADD CONSTRAINT "ItensCarrinho_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("prd_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinhos" ADD CONSTRAINT "Carrinhos_car_cli_id_fkey" FOREIGN KEY ("car_cli_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trocas" ADD CONSTRAINT "Trocas_tro_cli_id_fkey" FOREIGN KEY ("tro_cli_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trocas" ADD CONSTRAINT "Trocas_tro_ipd_id_fkey" FOREIGN KEY ("tro_ipd_id") REFERENCES "ItensPedido"("ipd_id") ON DELETE RESTRICT ON UPDATE CASCADE;
