import { AbstractEntity } from "./abstract-entity";

type EstadoConstructor = {
  id?: number;
  nomeEstado: string;
};
export class EstadoEntity extends AbstractEntity {
  private _nome: string;

  constructor({ id, nomeEstado }: EstadoConstructor) {
    super(id);
    this._nome = nomeEstado;
  }

  public get nome() {
    return this._nome;
  }
}
