/*
  Warnings:

  - The primary key for the `Clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pes_id` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `ranking` on the `Clientes` table. All the data in the column will be lost.
  - Added the required column `cli_pes_id` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cli_ranking` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Carrinhos" DROP CONSTRAINT "Carrinhos_car_cli_id_fkey";

-- DropForeignKey
ALTER TABLE "Cartoes" DROP CONSTRAINT "Cartoes_crt_cli_id_fkey";

-- DropForeignKey
ALTER TABLE "Clientes" DROP CONSTRAINT "Clientes_pes_id_fkey";

-- DropForeignKey
ALTER TABLE "Cupons" DROP CONSTRAINT "Cupons_cpm_cli_id_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_ped_cli_id_fkey";

-- DropForeignKey
ALTER TABLE "Trocas" DROP CONSTRAINT "Trocas_tro_cli_id_fkey";

-- AlterTable
ALTER TABLE "Clientes" DROP CONSTRAINT "Clientes_pkey",
DROP COLUMN "pes_id",
DROP COLUMN "ranking",
ADD COLUMN     "cli_pes_id" INTEGER NOT NULL,
ADD COLUMN     "cli_ranking" INTEGER NOT NULL,
ADD CONSTRAINT "Clientes_pkey" PRIMARY KEY ("cli_pes_id");

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_cli_pes_id_fkey" FOREIGN KEY ("cli_pes_id") REFERENCES "Pessoas"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cartoes" ADD CONSTRAINT "Cartoes_crt_cli_id_fkey" FOREIGN KEY ("crt_cli_id") REFERENCES "Clientes"("cli_pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cupons" ADD CONSTRAINT "Cupons_cpm_cli_id_fkey" FOREIGN KEY ("cpm_cli_id") REFERENCES "Clientes"("cli_pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_ped_cli_id_fkey" FOREIGN KEY ("ped_cli_id") REFERENCES "Clientes"("cli_pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinhos" ADD CONSTRAINT "Carrinhos_car_cli_id_fkey" FOREIGN KEY ("car_cli_id") REFERENCES "Clientes"("cli_pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trocas" ADD CONSTRAINT "Trocas_tro_cli_id_fkey" FOREIGN KEY ("tro_cli_id") REFERENCES "Clientes"("cli_pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;
