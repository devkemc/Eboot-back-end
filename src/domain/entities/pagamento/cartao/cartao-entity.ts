import { AbstractEntity } from "../../abstract-entity";

type CartaoConstructor = {
  id?: number;
  numeroCartao: number;
  nomeImpressoCartao: string;
  codSegurancaCartao: number;
  bandeiraCartao: string;
};
export class CartaoEntity extends AbstractEntity {
  private _numero: number;
  private _nomeImpresso: string;
  private _codSeguranca: number;
  private _bandeiraCartao: string;

  constructor(cartao: CartaoConstructor) {
    super(cartao.id);
    this._nomeImpresso = cartao.nomeImpressoCartao;
    this._bandeiraCartao = cartao.bandeiraCartao;
    this._codSeguranca = cartao.codSegurancaCartao;
    this._numero = cartao.numeroCartao;
  }

  public get numero() {
    return this._numero;
  }

  public get nomeImpresso() {
    return this._nomeImpresso;
  }

  public get codSeguranca() {
    return this._codSeguranca;
  }

  public get bandeiraCartao() {
    return this._bandeiraCartao;
  }
}
