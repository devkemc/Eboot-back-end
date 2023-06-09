import {AbstractEntity} from "../abstract-entity";
import {ClienteEntity} from "../pessoa/cliente-entity";
import {FormaPagamentoEntity} from "../pagamento/forma-pagamento-entity";
import {ItemPedidoEntity} from "./item-pedido-entity";
type Constructor = {
  id?:number
  cliente: ClienteEntity
  valorTotal:number
  valorTotalFrete:number
  desconto:number
  status:string
  itemPedido: [ItemPedidoEntity]
  formaPagamento:[FormaPagamentoEntity]

}
export class Pedido extends AbstractEntity{
  private _cliente : ClienteEntity
  private _valorTotal: number
  private _valorTotalFrete : number
  private _desconto: number
  private _status: string
  private _itemPedido: [ItemPedidoEntity]
  private _formaPagamento : [FormaPagamentoEntity]

  constructor(pedido:Constructor) {
    super(pedido.id);
    this._cliente = pedido.cliente
    this._valorTotal = pedido.valorTotal
    this._valorTotalFrete = pedido.valorTotalFrete
    this._desconto = pedido.desconto
    this._status = pedido.status
    this._itemPedido = pedido.itemPedido
    this._formaPagamento = pedido.formaPagamento
  }
}