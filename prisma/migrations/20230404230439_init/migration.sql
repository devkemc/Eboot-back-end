-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('CLIENTE', 'ADMINISTRADOR');

-- CreateEnum
CREATE TYPE "BandeiraCartao" AS ENUM ('VISA', 'MASTERCARD', 'ELO');

-- CreateEnum
CREATE TYPE "TipoTelefone" AS ENUM ('CELULAR', 'FIXO');

-- CreateEnum
CREATE TYPE "TipoImovel" AS ENUM ('COMERCIAL', 'RESIDENCIAL');

-- CreateEnum
CREATE TYPE "TipoEndereco" AS ENUM ('COBRANCA', 'ENTREGA');

-- CreateEnum
CREATE TYPE "TipoLogradouro" AS ENUM ('RUA', 'AVENIDA', 'PRACA', 'ESTRADA');

-- CreateTable
CREATE TABLE "Pessoa" (
    "pes_id" SERIAL NOT NULL,
    "pes_nome" VARCHAR(100) NOT NULL,
    "pes_sobrenome" VARCHAR(100) NOT NULL,
    "pes_dataNascimento" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pes_genero" VARCHAR(20) NOT NULL,
    "pes_cpf" TEXT NOT NULL,
    "pes_isActive" BOOLEAN NOT NULL,
    "pes_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pes_updateAt" TIMESTAMP(3) NOT NULL,
    "pes_tipo" "TipoPessoa" NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "ranking" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("pes_id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "user_id" SERIAL NOT NULL,
    "user_email" VARCHAR(100) NOT NULL,
    "user_senha" VARCHAR(255) NOT NULL,
    "user_admin" BOOLEAN NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Cartao" (
    "crt_id" SERIAL NOT NULL,
    "crt_bandeira" "BandeiraCartao" NOT NULL,
    "crt_numero_cartao" DOUBLE PRECISION NOT NULL,
    "crt_nome_impresso" VARCHAR(100) NOT NULL,
    "crt_cod_seguranca" INTEGER NOT NULL,
    "pessoa_id" INTEGER,

    CONSTRAINT "Cartao_pkey" PRIMARY KEY ("crt_id")
);

-- CreateTable
CREATE TABLE "Telefone" (
    "tel_id" SERIAL NOT NULL,
    "tel_tipo" "TipoTelefone" NOT NULL,
    "tel_ddd" INTEGER NOT NULL,
    "tel_numero" INTEGER NOT NULL,
    "pessoa_id" INTEGER,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("tel_id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "end_id" SERIAL NOT NULL,
    "end_tipo_imovel" "TipoImovel" NOT NULL,
    "end_tipo_endereco" "TipoEndereco" NOT NULL,
    "end_tipo_logradouro" "TipoLogradouro" NOT NULL,
    "end_logradouro" TEXT NOT NULL,
    "end_numero" TEXT NOT NULL,
    "end_bairro" TEXT NOT NULL,
    "end_cep" INTEGER NOT NULL,
    "pessoa_id" INTEGER NOT NULL,
    "cidade_id" INTEGER NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("end_id")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "cid_id" SERIAL NOT NULL,
    "cid_nome" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("cid_id")
);

-- CreateTable
CREATE TABLE "Estado" (
    "est_id" SERIAL NOT NULL,
    "est_nome" TEXT NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("est_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_pes_cpf_key" ON "Pessoa"("pes_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_usuario_id_key" ON "Pessoa"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_user_email_key" ON "Usuario"("user_email");

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cartao" ADD CONSTRAINT "Cartao_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "Pessoa"("pes_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "Pessoa"("pes_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "Pessoa"("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "Cidade"("cid_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidade" ADD CONSTRAINT "Cidade_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "Estado"("est_id") ON DELETE RESTRICT ON UPDATE CASCADE;
