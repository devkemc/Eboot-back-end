/*
  Warnings:

  - You are about to drop the `Calcados` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Calcados" DROP CONSTRAINT "Calcados_cal_id_fkey";

-- DropTable
DROP TABLE "Calcados";

-- CreateTable
CREATE TABLE "Tamanhos" (
    "cal_id" INTEGER NOT NULL,
    "tam_tamanho" INTEGER NOT NULL,
    "tam_quantidade" INTEGER NOT NULL,

    CONSTRAINT "Tamanhos_pkey" PRIMARY KEY ("cal_id")
);

-- AddForeignKey
ALTER TABLE "Tamanhos" ADD CONSTRAINT "Tamanhos_cal_id_fkey" FOREIGN KEY ("cal_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;
