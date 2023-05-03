import {AbstractEntity} from "../abstract-entity";
import {StatusTroca} from "@prisma/client";
import {ClienteEntity} from "../pessoa/cliente-entity";
import {ItemPedidoEntity} from "./item-pedido-entity";

export interface TrocaConstructor{
  id?:number
  motivo:string
  status:StatusTroca
  cliente:ClienteEntity
  itemPedido: ItemPedidoEntity
}

export class TrocaEntity extends AbstractEntity{
  private _motivo: string
  private _status: StatusTroca
  private _cliente: ClienteEntity
  private _itemPedido: ItemPedidoEntity

  constructor(troca: TrocaConstructor) {
    super(troca.id);
    this._cliente = troca.cliente
    this._itemPedido = troca.itemPedido
    this._motivo = troca.motivo
    this._status = troca.status

  }

}