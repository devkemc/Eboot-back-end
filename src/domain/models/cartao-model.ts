import { AbstractModel } from "./abstract-model";

export class CartaoModel extends AbstractModel {
  private _numero: number;
  private _nomeImpresso: string;
  private _codSeguranca: number;
  private _bandeiraCartao: string;

  constructor({
    _id: id,
    _numero: numero,
    _nomeImpresso: nomeImpresso,
    _codSeguranca: codSeguranca,
    _bandeiraCartao: bandeiraCartao,
  }: CartaoModel) {
    super(id);
    this._nomeImpresso = nomeImpresso;
    this._bandeiraCartao = bandeiraCartao;
    this._codSeguranca = codSeguranca;
    this._numero = numero;
  }
}
