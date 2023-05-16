import {AbstractEntity} from "../../abstract-entity";
import {BandeirasCartao} from "@prisma/client";
import {ClienteEntity} from "../../pessoa/cliente-entity";

type CartaoConstructor = {
  id?: number;
  numeroCartao?: number;
  nomeImpresso?: string;
  codSeguranca?: number;
  bandeiraCartao?: BandeirasCartao;
  validade?: Date;
  cliente?: ClienteEntity
};

export class CartaoEntity extends AbstractEntity {
  private _numero?: number;
  private _nomeImpresso?: string;
  private _codSeguranca?: number;
  private _bandeiraCartao?: BandeirasCartao;
  private _dataValidade?: Date
  private _cliente? : ClienteEntity

  constructor(cartao: CartaoConstructor) {
    super(cartao.id);
    this._nomeImpresso = cartao.nomeImpresso;
    this._bandeiraCartao = cartao.bandeiraCartao;
    this._codSeguranca = cartao.codSeguranca;
    this._numero = cartao.numeroCartao;
    this._dataValidade = cartao.validade
    this._cliente = cartao.cliente

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

  public get dataValidade(){
    return this._dataValidade
  }

  public get cliente(){
    return this._cliente
  }
}