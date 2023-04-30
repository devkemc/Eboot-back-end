/*
  Warnings:

  - The primary key for the `Tamanhos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cal_id` on the `Tamanhos` table. All the data in the column will be lost.
  - You are about to drop the column `tam_quantidade` on the `Tamanhos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tamanhos" DROP CONSTRAINT "Tamanhos_cal_id_fkey";

-- AlterTable
ALTER TABLE "Tamanhos" DROP CONSTRAINT "Tamanhos_pkey",
DROP COLUMN "cal_id",
DROP COLUMN "tam_quantidade",
ADD COLUMN     "tam_id" SERIAL NOT NULL,
ADD CONSTRAINT "Tamanhos_pkey" PRIMARY KEY ("tam_id");

-- CreateTable
CREATE TABLE "ProdutosTamanhos" (
    "quantidade" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "tamanho_id" INTEGER NOT NULL,

    CONSTRAINT "ProdutosTamanhos_pkey" PRIMARY KEY ("produto_id","tamanho_id")
);

-- AddForeignKey
ALTER TABLE "ProdutosTamanhos" ADD CONSTRAINT "ProdutosTamanhos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosTamanhos" ADD CONSTRAINT "ProdutosTamanhos_tamanho_id_fkey" FOREIGN KEY ("tamanho_id") REFERENCES "Tamanhos"("tam_id") ON DELETE RESTRICT ON UPDATE CASCADE;
