-- CreateTable
CREATE TABLE "Cliente" (
    "cli_id" SERIAL NOT NULL,
    "cli_nome" VARCHAR(100) NOT NULL,
    "cli_sobrenome" VARCHAR(100) NOT NULL,
    "cli_genero" VARCHAR(20) NOT NULL,
    "cli_cpf" BIGINT NOT NULL,
    "cli_email" VARCHAR(100) NOT NULL,
    "cli_senha" VARCHAR(255) NOT NULL,
    "cli_ranking" BIGINT NOT NULL,
    "cli_isActive" BOOLEAN NOT NULL,
    "cli_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cli_updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cli_id")
);

-- CreateTable
CREATE TABLE "Cartao" (
    "crt_id" SERIAL NOT NULL,
    "crt_numero_cartao" INTEGER NOT NULL,
    "crt_nome_impresso" VARCHAR(100) NOT NULL,
    "crt_cod_seguranca" INTEGER NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "Cartao_pkey" PRIMARY KEY ("crt_id")
);

-- CreateTable
CREATE TABLE "BandeiraCartao" (
    "band_crt_id" SERIAL NOT NULL,
    "band_crt_descricao" VARCHAR(255) NOT NULL,

    CONSTRAINT "BandeiraCartao_pkey" PRIMARY KEY ("band_crt_id")
);

-- CreateTable
CREATE TABLE "Telefone" (
    "tel_id" SERIAL NOT NULL,
    "tel_tipo" TEXT NOT NULL,
    "tel_ddd" INTEGER NOT NULL,
    "tel_numero" INTEGER NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("tel_id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "end_id" SERIAL NOT NULL,
    "end_tipo_imovel" TEXT NOT NULL,
    "end_tipo_endereco" TEXT NOT NULL,
    "end_tipo_logradouro" TEXT NOT NULL,
    "end_logradouro" TEXT NOT NULL,
    "end_numero" TEXT NOT NULL,
    "end_bairro" TEXT NOT NULL,
    "end_cep" INTEGER NOT NULL,
    "cliente_id" INTEGER NOT NULL,
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
CREATE UNIQUE INDEX "Cliente_cli_cpf_key" ON "Cliente"("cli_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cli_email_key" ON "Cliente"("cli_email");

-- AddForeignKey
ALTER TABLE "Cartao" ADD CONSTRAINT "Cartao_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cli_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cli_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cli_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "Cidade"("cid_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cidade" ADD CONSTRAINT "Cidade_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "Estado"("est_id") ON DELETE RESTRICT ON UPDATE CASCADE;
