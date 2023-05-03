import {AbstractEntity} from "../abstract-entity";
import {ProdutoEntity} from "../produto/produto-entity";
export interface ItemCarrinhoConstructor{
  id?:number
  quantidade:number
  valorTotal:number
  tamanho:number
  produto:ProdutoEntity
}
export class ItemCarrinhoEntity extends AbstractEntity{
  private _quantidade:number
  private _valorTotal:number
  private _tamanho: number
  private _produto: ProdutoEntity

  constructor(itemCarrinho: ItemCarrinhoConstructor) {
    super(itemCarrinho.id);
    this._produto = itemCarrinho.produto
    this._quantidade = itemCarrinho.quantidade
    this._tamanho = itemCarrinho.tamanho
    this._valorTotal = itemCarrinho.valorTotal
  }

  get produto(){
    return this._produto
  }

  get quantidade(){
    return this._quantidade
  }

  get tamanho(){
    return this._tamanho
  }

  get valorTotal(){
    return this._valorTotal
  }
}