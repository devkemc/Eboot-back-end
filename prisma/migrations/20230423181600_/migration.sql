/*
  Warnings:

  - Made the column `prod_quantidade_total` on table `Produtos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Produtos" ALTER COLUMN "prod_quantidade_total" SET NOT NULL;
