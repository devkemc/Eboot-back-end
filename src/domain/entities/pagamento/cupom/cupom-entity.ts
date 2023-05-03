import {AbstractEntity} from "../../abstract-entity";
import {ClienteEntity} from "../../pessoa/cliente-entity";
import {FormaPagamentoEntity} from "../forma-pagamento-entity";

export interface CupomConstructor{
  id?: number
  valor:number
  ativo:boolean
  cliente:ClienteEntity
  validade: Date
}
export class CupomEntity extends FormaPagamentoEntity{
  private _ativo: boolean
  private _cliente : ClienteEntity
  private _validade: Date

  constructor(cupom:CupomConstructor) {
    super(cupom);
    this._valor = cupom.valor
    this._ativo = cupom.ativo
    this._cliente = cupom.cliente
    this._validade = cupom.validade
  }
  get valor(){
    return this._valor
  }
  get ativo(){
    return this._ativo
  }
  get cliente(){
    return this._cliente
  }
  get validade(){
    return this._validade
  }
}