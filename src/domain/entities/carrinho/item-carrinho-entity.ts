import {AbstractEntity} from "../abstract-entity";
import {ProdutoEntity} from "../produto/produto-entity";
import {CarrinhoEntity} from "./carrinho-entity";
export interface ItemCarrinhoConstructor{
  id?:number
  quantidade?:number
  valorTotal?:number
  tamanho?:number
  produto?:ProdutoEntity
  carrinho?: CarrinhoEntity
}
export class ItemCarrinhoEntity extends AbstractEntity{
  private _quantidade?:number
  private _valorTotal?:number
  private _tamanho?: number
  private _produto?: ProdutoEntity
  private _carrinho?: CarrinhoEntity

  constructor(itemCarrinho: ItemCarrinhoConstructor) {
    super(itemCarrinho.id);
    this._produto = itemCarrinho.produto
    this._quantidade = itemCarrinho.quantidade
    this._tamanho = itemCarrinho.tamanho
    this._valorTotal = itemCarrinho.valorTotal
    this._carrinho = itemCarrinho.carrinho
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

  get carrinho(){
    return this._carrinho
  }

  set valorTotal(valor:number | undefined){
    this._valorTotal = valor
  }
}