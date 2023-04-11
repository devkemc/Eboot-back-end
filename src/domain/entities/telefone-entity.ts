import { TipoTelefone } from "@prisma/client";
import { AbstractEntity } from "./abstract-entity";

type TelefoneConstructor = {
  id?: number;
  dddTelefone: number;
  tipoTelefone: TipoTelefone;
  numeroTelefone: number;
};


export class TelefoneEntity extends AbstractEntity {
  private _tipo: TipoTelefone;
  private _ddd: number;
  private _numero: number;

  constructor({
    dddTelefone: ddd,
    tipoTelefone,
    id,
    numeroTelefone,
  }: TelefoneConstructor) {
    super(id);
    this._ddd = ddd;
    this._tipo = tipoTelefone;
    this._numero = numeroTelefone;
  }

  public get ddd() {
    return this._ddd;
  }

  public get numero() {
    return this._numero;
  }

  public get tipo() {
    return this._tipo;
  }
}
