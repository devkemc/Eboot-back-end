import { TiposEndereco, TiposImovel, TiposLogradouro } from "@prisma/client";
import { AbstractEntity } from "./abstract-entity";
import { CidadeEntity } from "./cidade-entity";

type EnderecoConstructor = {
  id?: number;
  tipoImovel: TiposImovel;
  tipoEndereco: TiposEndereco;
  tipoLogradouro: TiposLogradouro;
  logradouro: string;
  numeroEndereco: string;
  bairro: string;
  cep: number;
  cidade: CidadeEntity;
};
export class EnderecoEntity extends AbstractEntity {
  private _tipoImovel: TiposImovel;
  private _tipoEndereco: TiposEndereco;
  private _tipoLogradouro: TiposLogradouro;
  private _logradouro: string;
  private _numero: string;
  private _bairro: string;
  private _cep: number;
  private _cidade: CidadeEntity;

  constructor({
    id,
    tipoImovel,
    tipoEndereco,
    logradouro,
    tipoLogradouro,
    bairro,
    numeroEndereco,
    cep,
    cidade,
  }: EnderecoConstructor) {
    super(id);
    this._tipoImovel = tipoImovel;
    this._tipoEndereco = tipoEndereco;
    this._tipoLogradouro = tipoLogradouro;
    this._logradouro = logradouro;
    this._numero = numeroEndereco;
    this._bairro = bairro;
    this._cep = cep;
    this._cidade = cidade;
  }

  public get tipoImovel() {
    return this._tipoImovel;
  }

  public get tipoEndereco() {
    return this._tipoEndereco;
  }

  public get tipoLogradouro() {
    return this._tipoLogradouro;
  }

  public get logradouro() {
    return this._logradouro;
  }

  public get numero() {
    return this._numero;
  }

  public get bairro() {
    return this._bairro;
  }

  public get cep() {
    return this._cep;
  }

  public get cidade() {
    return this._cidade;
  }
}
