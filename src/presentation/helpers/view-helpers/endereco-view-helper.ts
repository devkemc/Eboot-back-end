import {AbstractViewHelper} from "./abstract-view-helper";
import {Request} from "express";
import {EstadoEntity} from "../../../domain/entities/pessoa/estado-entity";
import {CidadeEntity} from "../../../domain/entities/pessoa/cidade-entity";
import {EnderecoEntity} from "../../../domain/entities/pessoa/endereco-Entity";
import {PessoaEntity} from "../../../domain/entities/pessoa/pessoa-entity";
import {Entity} from "../../../domain/interfaces/i-entity";
import {Enderecos} from "@prisma/client";

interface EnderecoCompleto extends Enderecos {
  cidade: {
    cid_nome: string
    estado: {
      est_nome: string
    }
  }
}

export class EnderecoViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {
      pessoaId, tipoEndereco,
      tipoLogradouro,
      tipoImovel,
      logradouro,
      numeroEndereco,
      bairro,
      cep,
      nomeCidade,
      nomeEstado
    } = req.body
    const pessoa = new PessoaEntity({id: pessoaId})
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
      pessoa
    });
    super(endereco);
  }

  public setView(entity: Entity | Entity[]) {
    const enderecos = entity as EnderecoCompleto[]
    if (!Array.isArray(enderecos)) {
      const endereco = entity as EnderecoCompleto
      return {
        idEndereco: endereco.end_id,
        tipoEndereco: endereco.end_tipo_endereco,
        tipoLogradouro: endereco.end_tipo_logradouro,
        tipoImovel: endereco.end_tipo_imovel,
        logradouro: endereco.end_logradouro,
        numeroEndereco: endereco.end_numero,
        bairro: endereco.end_bairro,
        cep: endereco.end_cep,
        nomeCidade: endereco.cidade.cid_nome,
        nomeEstado: endereco.cidade.estado.est_nome
      }
    }
    return enderecos.map((endereco) => ({
      idEndereco: endereco.end_id,
      tipoEndereco: endereco.end_tipo_endereco,
      tipoLogradouro: endereco.end_tipo_logradouro,
      tipoImovel: endereco.end_tipo_imovel,
      logradouro: endereco.end_logradouro,
      numeroEndereco: endereco.end_numero,
      bairro: endereco.end_bairro,
      cep: endereco.end_cep,
      nomeCidade: endereco.cidade.cid_nome,
      nomeEstado: endereco.cidade.estado.est_nome
    }))
  }
}