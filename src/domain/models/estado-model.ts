import { AbstractModel } from "./abstract-model";

export class EstadoModel extends AbstractModel {
  private _nome: string;

  constructor({ _id: id, _nome: nome }: EstadoModel) {
    super(id);
    this._nome = nome;
  }
}
