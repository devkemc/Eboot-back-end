import {FormaPagamentoEntity} from "../forma-pagamento-entity";
import {CartaoEntity} from "./cartao-entity";
export interface CartaoPagamentoConstructor{
  id?:number
  cartao:CartaoEntity
  valor:number
}
export class CartaoPagamento extends FormaPagamentoEntity{
  private _cartao: CartaoEntity
  constructor(cartao_pg:CartaoPagamentoConstructor) {
    super(cartao_pg);
    this._cartao = cartao_pg.cartao
  }
  get cartao(){
    return this._cartao
  }
  get valor(){
    return this._valor
  }
}