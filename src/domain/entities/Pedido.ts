import {AbstractEntity} from "./abstract-entity";
import {ClienteEntity} from "./cliente-entity";
type Constructor = {
  id?:number
  cliente: ClienteEntity
  valorTotal:number
  valorFrete:number
  desconto:number
  status:string

}
export class Pedido extends AbstractEntity{
  private _cliente : ClienteEntity
  private _valorTotal: number
  private _valorFrete : number
  private _desconto: number
  private _status: string

  constructor(pedido:Constructor) {
    super(pedido.id);
    this._cliente = pedido.cliente
    this._valorTotal = pedido.valorTotal
    this._valorFrete = pedido.valorFrete
    this._desconto = pedido.desconto
    this._status = pedido.status
  }
}