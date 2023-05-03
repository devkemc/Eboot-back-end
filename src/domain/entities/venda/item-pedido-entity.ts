import {AbstractEntity} from "../abstract-entity";
import {ProdutoEntity} from "../produto/produto-entity";
import {StatusItemPedido} from "@prisma/client";

export interface ItemPedidoConstructor {
  id?: number
  valorFrete: number
  quantidade: number
  valorTotal: number
  status: StatusItemPedido
  tamanho: number
  produto: ProdutoEntity
}

export class ItemPedidoEntity extends AbstractEntity {
  private _valorFrete: number
  private _quantidade: number
  private _valorTotal: number
  private _status: StatusItemPedido
  private _tamanho: number
  private _produto: ProdutoEntity

  constructor(itemPedido: ItemPedidoConstructor) {
    super(itemPedido.id);
    this._valorFrete = itemPedido.valorFrete
    this._quantidade = itemPedido.quantidade
    this._valorTotal = itemPedido.valorTotal
    this._status = itemPedido.status
    this._tamanho = itemPedido.tamanho
    this._produto = itemPedido.produto
  }

  public get valorFrete() {
    return this._valorFrete
  }
  public get quantidade(){
    return this._quantidade
  }
  public get valorTotal(){
    return this._valorTotal
  }

  public get status(){
    return this._status
  }

  public get tamanho(){
    return this._tamanho
  }

  public get produto(){
    return this._produto
  }

}