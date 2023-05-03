import { AbstractEntity } from "../abstract-entity";

type EstadoConstructor = {
  id?: number;
  nomeEstado: string;
};
export class EstadoEntity extends AbstractEntity {
  private _nome: string;

  constructor(estado: EstadoConstructor) {
    super(estado.id);
    this._nome = estado.nomeEstado;
  }

  public get nome() {
    return this._nome;
  }
}
