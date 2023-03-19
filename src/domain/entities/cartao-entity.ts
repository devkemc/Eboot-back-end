import { AbstractEntity } from "./abstract-entity";

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

  constructor({
    id,
    numeroCartao,
    nomeImpressoCartao,
    codSegurancaCartao,
    bandeiraCartao,
  }: CartaoConstructor) {
    super(id);
    this._nomeImpresso = nomeImpressoCartao;
    this._bandeiraCartao = bandeiraCartao;
    this._codSeguranca = codSegurancaCartao;
    this._numero = numeroCartao;
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
