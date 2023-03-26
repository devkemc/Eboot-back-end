/*
  Warnings:

  - Made the column `cliente_id` on table `Endereco` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_cliente_id_fkey";

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "cliente_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cli_id") ON DELETE RESTRICT ON UPDATE CASCADE;
