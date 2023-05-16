import {AbstractEntity} from "../abstract-entity";
import {Categoria} from "./categoria";

type Constructor = {
  id?: number
  nome?: string
  descricao?: string
  foto1?: string
  foto2?: string
  foto3?: string
  quantidadeTotal?: number
  preco?: number
  status?: boolean
  categoria?: Categoria

}

export class ProdutoEntity extends AbstractEntity {
  private _nome?: string;
  private _descricao?: string;
  private _foto1?: string
  private _foto2?: string
  private _foto3?: string
  private _quantidadeTotal?: number
  private _preco?: number
  private _status?: boolean
  private _categoria?: Categoria

  constructor(produto: Constructor) {
    super(produto.id);
    this._nome = produto.nome
    this._descricao = produto.descricao
    this._foto1 = produto.foto1
    this._foto2 = produto.foto2
    this._foto3 = produto.foto3
    this._quantidadeTotal = produto.quantidadeTotal
    this._preco = produto.preco
    this._status = produto.status
    this._categoria = produto.categoria
  }

  get nome() {
    return this._nome
  }

  get descricao() {
    return this._descricao
  }

  get foto1() {
    return this._foto1
  }

  get foto2() {
    return this._foto2
  }

  get foto3() {
    return this._foto3
  }

  get quantidadeTotal() {
    return this._quantidadeTotal
  }

  get preco() {
    return this._preco
  }

  get status() {
    return this._status
  }

  get categoria() {
    return this._categoria
  }
  set setPreco(p:number){
    this._preco = p
  }
}