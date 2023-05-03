import { TiposTelefone } from "@prisma/client";
import { AbstractEntity } from "./abstract-entity";

type TelefoneConstructor = {
  id?: number;
  dddTelefone: number;
  tipoTelefone: TiposTelefone;
  numeroTelefone: number;
};


export class TelefoneEntity extends AbstractEntity {
  private _tipo: TiposTelefone;
  private _ddd: number;
  private _numero: number;

  constructor(telefone: TelefoneConstructor) {
    super(telefone.id);
    this._ddd = telefone.dddTelefone;
    this._tipo = telefone.tipoTelefone;
    this._numero = telefone.numeroTelefone;
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
