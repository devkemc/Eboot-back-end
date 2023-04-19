/*
  Warnings:

  - You are about to drop the column `pes_tipo` on the `Pessoas` table. All the data in the column will be lost.
  - Added the required column `pes_tipo_fone` to the `Pessoas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pessoas" DROP COLUMN "pes_tipo",
ADD COLUMN     "pes_tipo_fone" "TiposTelefone" NOT NULL;
