/*
  Warnings:

  - The primary key for the `Calcados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `numero` on the `Calcados` table. All the data in the column will be lost.
  - You are about to drop the column `prod_id` on the `Calcados` table. All the data in the column will be lost.
  - You are about to drop the column `prod_quantidade` on the `Produtos` table. All the data in the column will be lost.
  - Added the required column `cal_id` to the `Calcados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cal_quantidade` to the `Calcados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cal_tamanho` to the `Calcados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prod_quantidade_total` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calcados" DROP CONSTRAINT "Calcados_prod_id_fkey";

-- AlterTable
ALTER TABLE "Calcados" DROP CONSTRAINT "Calcados_pkey",
DROP COLUMN "numero",
DROP COLUMN "prod_id",
ADD COLUMN     "cal_id" INTEGER NOT NULL,
ADD COLUMN     "cal_quantidade" INTEGER NOT NULL,
ADD COLUMN     "cal_tamanho" INTEGER NOT NULL,
ADD CONSTRAINT "Calcados_pkey" PRIMARY KEY ("cal_id");

-- AlterTable
ALTER TABLE "Produtos" DROP COLUMN "prod_quantidade",
ADD COLUMN     "prod_quantidade_total" INTEGER;

-- AddForeignKey
ALTER TABLE "Calcados" ADD CONSTRAINT "Calcados_cal_id_fkey" FOREIGN KEY ("cal_id") REFERENCES "Produtos"("prod_id") ON DELETE RESTRICT ON UPDATE CASCADE;
