/*
  Warnings:

  - Added the required column `crt_data_validade` to the `Cartoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cartoes" ADD COLUMN     "crt_data_validade" TIMESTAMP(3) NOT NULL;
