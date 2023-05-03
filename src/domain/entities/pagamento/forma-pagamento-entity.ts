import {AbstractEntity} from "../abstract-entity";
import {Pedido} from "../venda/pedido";

export interface FormaPagamentoConstructor{
  id?:number
  valor:number
}
export class FormaPagamentoEntity extends AbstractEntity{
  protected _valor:number

  constructor(fpagamento:FormaPagamentoConstructor) {
    super(fpagamento.id);
    this._valor = fpagamento.valor
  }

}