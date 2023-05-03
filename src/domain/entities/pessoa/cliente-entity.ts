import { CartaoEntity } from "../pagamento/cartao/cartao-entity";
import { PessoaConstructor, PessoaEntity } from "./pessoa-entity";

interface ClienteConstructor extends PessoaConstructor {
  ranking: number;
  cartao?: CartaoEntity;
}
export class ClienteEntity extends PessoaEntity {
  private _ranking: number;
  private _cartao?: CartaoEntity;
  constructor(cliente: ClienteConstructor) {
    super(cliente);
    this._cartao = cliente.cartao;
    this._ranking = cliente.ranking;
  }
  public get ranking() {
    return this._ranking;
  }

  public get cartao() {
    return this._cartao;
  }
}
