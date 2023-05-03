/*
  Warnings:

  - You are about to drop the column `fpag_valor` on the `FormaPagamento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FormaPagamento" DROP COLUMN "fpag_valor";

-- CreateTable
CREATE TABLE "Pedidos_Forma_Pagamento" (
    "pfp_valor" DOUBLE PRECISION NOT NULL,
    "forma_pagamento_id" INTEGER NOT NULL,
    "pedido_id" INTEGER NOT NULL,

    CONSTRAINT "Pedidos_Forma_Pagamento_pkey" PRIMARY KEY ("forma_pagamento_id","pedido_id")
);

-- AddForeignKey
ALTER TABLE "Pedidos_Forma_Pagamento" ADD CONSTRAINT "Pedidos_Forma_Pagamento_forma_pagamento_id_fkey" FOREIGN KEY ("forma_pagamento_id") REFERENCES "FormaPagamento"("fpag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos_Forma_Pagamento" ADD CONSTRAINT "Pedidos_Forma_Pagamento_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedidos"("ped_id") ON DELETE RESTRICT ON UPDATE CASCADE;
