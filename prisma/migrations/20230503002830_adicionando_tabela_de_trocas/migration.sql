-- CreateEnum
CREATE TYPE "StatusTroca" AS ENUM ('SOLICITADA', 'AGUARDANDO_ENVIO', 'RECEBIDO', 'VERIFICADO', 'EM_PROCESSAMENTO', 'CONCLUIDA');

-- CreateTable
CREATE TABLE "Trocas" (
    "tro_id" SERIAL NOT NULL,
    "tro_motivo" TEXT NOT NULL,
    "tro_status" "StatusTroca" NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "item_pedido_id" INTEGER NOT NULL,

    CONSTRAINT "Trocas_pkey" PRIMARY KEY ("tro_id")
);

-- AddForeignKey
ALTER TABLE "Trocas" ADD CONSTRAINT "Trocas_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Clientes"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trocas" ADD CONSTRAINT "Trocas_item_pedido_id_fkey" FOREIGN KEY ("item_pedido_id") REFERENCES "ItensPedido"("iped_id") ON DELETE RESTRICT ON UPDATE CASCADE;
