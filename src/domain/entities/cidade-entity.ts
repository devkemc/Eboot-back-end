import { AbstractEntity } from "./abstract-entity";
import { EstadoEntity } from "./estado-entity";

type CidadeConstructor = {
  id?: number;
  nomeCidade: string;
  estado: EstadoEntity;
};
export class CidadeEntity extends AbstractEntity {
  private _nome: string;
  private _estado: EstadoEntity;

  constructor(cidade: CidadeConstructor) {
    super(cidade.id);
    this._nome = cidade.nomeCidade;
    this._estado = cidade.estado;
  }

  public get nome() {
    return this._nome;
  }

  public get estado() {
    return this._estado;
  }
}
