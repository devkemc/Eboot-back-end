-- DropForeignKey
ALTER TABLE "Cartao" DROP CONSTRAINT "Cartao_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "Telefone" DROP CONSTRAINT "Telefone_cliente_id_fkey";

-- AlterTable
ALTER TABLE "Cartao" ALTER COLUMN "cliente_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "cliente_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Telefone" ALTER COLUMN "cliente_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cartao" ADD CONSTRAINT "Cartao_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cli_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cli_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cli_id") ON DELETE SET NULL ON UPDATE CASCADE;
