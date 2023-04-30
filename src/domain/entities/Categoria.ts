import {AbstractEntity} from "./abstract-entity";

type Constructor = {
  nome:string
  id:number
}
export class Categoria extends AbstractEntity{
  private _nome: string
  constructor(categoria:Constructor) {
    super(categoria.id);
    this._nome = categoria.nome
  }
  get nome(){
    return this._nome
  }
  get id(){
    return this._id
  }
}