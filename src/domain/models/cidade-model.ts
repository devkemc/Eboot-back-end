import { Estado } from "@prisma/client";
import { AbstractModel } from "./abstract-model";

export class CidadeModel extends AbstractModel {
  private _nome: string;
  private _estado: Estado;

  constructor({ _id: id, _nome: nome, _estado: estado }: CidadeModel) {
    super(id);
    this._nome = nome;
    this._estado = estado;
  }
}
