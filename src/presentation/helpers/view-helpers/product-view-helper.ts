import { Request } from "express";
import { CidadeEntity } from "../../../domain/entities/cidade-entity";
import { EnderecoEntity } from "../../../domain/entities/endereco-Entity";
import { EstadoEntity } from "../../../domain/entities/estado-entity";
import { Entity } from "../../../domain/interfaces/i-entity";
import { AbstractViewHelper } from "./abstract-view-helper";

export class ProductsViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {
      tipoImovel,
      tipoEndereco,
      tipoLogradouro,
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
      bairro,
      cep,
      cidade,
      logradouro,
      numeroEndereco,
      tipoEndereco,
      tipoImovel,
      tipoLogradouro,
    });
    super(endereco);
  }
  public setView(entity: Entity): Entity {
    return entity;
  }
}
