import { Cliente } from "@prisma/client";
import { Request } from "express";
import { CartaoEntity } from "../../../domain/entities/cartao-entity";
import { CidadeEntity } from "../../../domain/entities/cidade-entity";
import { ClienteEntity } from "../../../domain/entities/cliente-entity";
import { TelefoneEntity } from "../../../domain/entities/telefone-entity";
import { Entity } from "../../../domain/interfaces/i-entity";
import { AbstractViewHelper } from "./abstract-view-helper";
import { EstadoEntity } from "../../../domain/entities/estado-entity";
import { EnderecoEntity } from "../../../domain/entities/endereco-Entity";

export class ClienteViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {
      nome,
      sobrenome,
      cpf,
      genero,
      dataNascimento,
      email,
      senha,
      ranking,
      isActive,
      tipoTelefone,
      dddTelefone,
      numeroTelefone,
      tipoEndereco,
      tipoLogradouro,
      tipoImovel,
      logradouro,
      numeroEndereco,
      bairro,
      cep,
      nomeCidade,
      nomeEstado,
    } = req.body;
    const estado = new EstadoEntity({ nomeEstado });
    const cidade = new CidadeEntity({ nomeCidade, estado });
    const endereco = new EnderecoEntity({
      tipoImovel,
      tipoEndereco,
      logradouro,
      tipoLogradouro,
      bairro,
      numeroEndereco,
      cep,
      cidade,
    });
    const telefone = new TelefoneEntity({
      numeroTelefone,
      dddTelefone,
      tipoTelefone,
    });

    super(
      new ClienteEntity({
        nome,
        sobrenome,
        dataNascimento: new Date(dataNascimento),
        email,
        senha,
        ranking,
        isActive,
        cpf,
        genero,
        telefone,
        endereco,
      })
    );
  }

  public setView(entity: Entity[] | Entity) {
    const clientes = entity as Cliente[];
    const clientesResponse = [];
    if (!Array.isArray(clientes)) {
      const cliente = entity as Cliente;
      return {
        id: cliente.cli_id,
        nome: cliente.cli_nome,
        sobrenome: cliente.cli_sobrenome,
        email: cliente.cli_email,
        cpf: cliente.cli_cpf,
        genero: cliente.cli_genero,
        ranking: cliente.cli_ranking,
        isActive: cliente.cli_isActive,
      };
    }

    for (const cli of clientes) {
      clientesResponse.push({
        id: cli.cli_id,
        nome: cli.cli_nome,
        sobrenome: cli.cli_sobrenome,
        email: cli.cli_email,
        cpf: cli.cli_cpf,
        genero: cli.cli_genero,
        ranking: cli.cli_ranking,
        isActive: cli.cli_isActive,
      });
    }

    return clientesResponse;
  }
}
