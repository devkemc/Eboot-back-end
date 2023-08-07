/*
  Warnings:

  - The primary key for the `ItensCarrinho` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `carrinho_id` on the `ItensCarrinho` table. All the data in the column will be lost.
  - You are about to drop the column `icar_id` on the `ItensCarrinho` table. All the data in the column will be lost.
  - You are about to drop the column `icar_quantidade` on the `ItensCarrinho` table. All the data in the column will be lost.
  - You are about to drop the column `icar_valor_total` on the `ItensCarrinho` table. All the data in the column will be lost.
  - You are about to drop the column `produto_id` on the `ItensCarrinho` table. All the data in the column will be lost.
  - You are about to drop the column `tamanho_id` on the `ItensCarrinho` table. All the data in the column will be lost.
  - Added the required column `icr_car_id` to the `ItensCarrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icr_prd_id` to the `ItensCarrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icr_quantidade` to the `ItensCarrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icr_tam_id` to the `ItensCarrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icr_valor_total` to the `ItensCarrinho` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItensCarrinho" DROP CONSTRAINT "ItensCarrinho_carrinho_id_fkey";

-- DropForeignKey
ALTER TABLE "ItensCarrinho" DROP CONSTRAINT "ItensCarrinho_produto_id_fkey";

-- DropForeignKey
ALTER TABLE "ItensCarrinho" DROP CONSTRAINT "ItensCarrinho_tamanho_id_fkey";

-- AlterTable
ALTER TABLE "ItensCarrinho" DROP CONSTRAINT "ItensCarrinho_pkey",
DROP COLUMN "carrinho_id",
DROP COLUMN "icar_id",
DROP COLUMN "icar_quantidade",
DROP COLUMN "icar_valor_total",
DROP COLUMN "produto_id",
DROP COLUMN "tamanho_id",
ADD COLUMN     "icr_car_id" INTEGER NOT NULL,
ADD COLUMN     "icr_id" SERIAL NOT NULL,
ADD COLUMN     "icr_prd_id" INTEGER NOT NULL,
ADD COLUMN     "icr_quantidade" INTEGER NOT NULL,
ADD COLUMN     "icr_tam_id" INTEGER NOT NULL,
ADD COLUMN     "icr_valor_total" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "ItensCarrinho_pkey" PRIMARY KEY ("icr_id");

-- AddForeignKey
ALTER TABLE "ItensCarrinho" ADD CONSTRAINT "ItensCarrinho_icr_tam_id_fkey" FOREIGN KEY ("icr_tam_id") REFERENCES "Tamanhos"("tam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensCarrinho" ADD CONSTRAINT "ItensCarrinho_icr_prd_id_fkey" FOREIGN KEY ("icr_prd_id") REFERENCES "Produtos"("prd_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensCarrinho" ADD CONSTRAINT "ItensCarrinho_icr_car_id_fkey" FOREIGN KEY ("icr_car_id") REFERENCES "Carrinhos"("car_id") ON DELETE RESTRICT ON UPDATE CASCADE;
