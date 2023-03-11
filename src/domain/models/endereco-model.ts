import { AbstractModel } from "./abstract-model";

export class EnderecoModel extends AbstractModel {
  private _tipoImovel: string;
  private _tipoEndereco: string;
  private _tipoLogradouro: string;
  private _logradouro: string;
  private _numero: string;
  private _bairro: string;
  private _cep: number;

  constructor({
    _id: id,
    _tipoImovel: tipoImovel,
    _tipoEndereco: tipoEndereco,
    _logradouro: logradouro,
    _tipoLogradouro: tipoLogradouro,
    _bairro: bairro,
    _numero: numero,
    _cep: cep,
  }: EnderecoModel) {
    super(id);
    this._tipoImovel = tipoImovel;
    this._tipoEndereco = tipoEndereco;
    this._tipoLogradouro = tipoLogradouro;
    this._logradouro = logradouro;
    this._numero = numero;
    this._bairro = bairro;
    this._cep = cep;
  }
}
