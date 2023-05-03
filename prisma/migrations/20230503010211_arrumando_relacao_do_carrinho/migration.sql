/*
  Warnings:

  - A unique constraint covering the columns `[cliente_id]` on the table `Carrinhos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Carrinhos_cliente_id_key" ON "Carrinhos"("cliente_id");
