/*
  Warnings:

  - You are about to alter the column `ranking` on the `Clientes` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Made the column `ranking` on table `Clientes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Clientes" ALTER COLUMN "ranking" SET NOT NULL,
ALTER COLUMN "ranking" SET DATA TYPE INTEGER;
