import {Pessoas} from "@prisma/client";
import {Request} from "express";
import {CidadeEntity} from "../../../domain/entities/pessoa/cidade-entity";
import {TelefoneEntity} from "../../../domain/entities/pessoa/telefone-entity";
import {Entity} from "../../../domain/interfaces/i-entity";
import {AbstractViewHelper} from "./abstract-view-helper";
import {EstadoEntity} from "../../../domain/entities/pessoa/estado-entity";
import {EnderecoEntity} from "../../../domain/entities/pessoa/endereco-Entity";
import {ClienteEntity} from "../../../domain/entities/pessoa/cliente-entity";

interface ClientesPessoas extends Pessoas {
  cliente: {
    ranking: number
  }
}
export class ClienteViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {
      id,
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
    const estado = new EstadoEntity({nomeEstado});
    const cidade = new CidadeEntity({nomeCidade, estado});
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
        id: req.query.id ? Number(req.query.id) : id,
        nome,
        sobrenome,
        dataNascimento: dataNascimento
          ? new Date(dataNascimento)
          : dataNascimento,
        email,
        senha,
        ranking: ranking ?? 0,
        isActive,
        cpf,
        genero,
        telefone,
        endereco,
      })
    );
  }


  public setView(entity: Entity[] | Entity) {
    const clientes = entity as ClientesPessoas[];
    if (!Array.isArray(clientes)) {
      const cliente = entity as ClientesPessoas;
      return {
        id: cliente.pes_id,
        nome: cliente.pes_nome,
        sobrenome: cliente.pes_sobrenome,
        email: cliente.pes_email,
        cpf: cliente.pes_cpf,
        genero: cliente.pes_genero,
        dataNascimento: cliente.pes_dataNascimento,
      };
    }

    return clientes.map((cli) => ({
      id: cli.pes_id,
      nome: cli.pes_nome,
      sobrenome: cli.pes_sobrenome,
      cpf: cli.pes_cpf,
      genero: cli.pes_genero,
      ranking: cli.cliente.ranking,
      isActive: cli.pes_isActive,
    }))
  }
}
