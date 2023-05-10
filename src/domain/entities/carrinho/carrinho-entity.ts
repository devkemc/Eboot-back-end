import {AbstractEntity} from "../abstract-entity";
import {ClienteEntity} from "../pessoa/cliente-entity";
import {ItemCarrinhoEntity} from "./item-carrinho-entity";

export interface CarrinhoConstructor{
  id?:number
  valorTotal?:number
  cliente?:ClienteEntity
  itemCarrinho?:  [ItemCarrinhoEntity]
}
export class CarrinhoEntity extends AbstractEntity{
  private _valorTotal?: number
  private _cliente?: ClienteEntity
  private  _itemCarrinho?: [ItemCarrinhoEntity]

  constructor(carrinho:CarrinhoConstructor) {
    super(carrinho.id);
    this._itemCarrinho = carrinho.itemCarrinho
    this._cliente = carrinho.cliente
    this._valorTotal = carrinho.valorTotal

  }

  get itemCarrinho(){
    return this._itemCarrinho
  }

  get cliente(){
    return this._cliente
  }

  get valorTotal(){
    return this._valorTotal
  }

}