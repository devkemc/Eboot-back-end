/*
  Warnings:

  - You are about to drop the column `icar_tamanho` on the `ItensCarrinho` table. All the data in the column will be lost.
  - Added the required column `tamanho_id` to the `ItensCarrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco_id` to the `Pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItensCarrinho" DROP COLUMN "icar_tamanho",
ADD COLUMN     "tamanho_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pedidos" ADD COLUMN     "endereco_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "Enderecos"("end_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItensCarrinho" ADD CONSTRAINT "ItensCarrinho_tamanho_id_fkey" FOREIGN KEY ("tamanho_id") REFERENCES "Tamanhos"("tam_id") ON DELETE RESTRICT ON UPDATE CASCADE;
