import { Endereco } from "@prisma/client";
import { AbstractModel } from "./abstract-model";
import { CartaoModel } from "./cartao-model";

export class ClienteModel extends AbstractModel {
  private _nome: string;
  private _sobrenome: string;
  private _genero: string;
  private _cpf: number;
  private _email: string;
  private _senha: string;
  private _ranking: number;
  private _isActive: boolean;
  private _cartao: CartaoModel
  private _endereco: Endereco;

  constructor({
    _cpf: cpf,
    _cartao: cartao,
    _email: email,
    _nome: nome,
    _sobrenome: sobrenome,
    _endereco: endereco,
    _genero: genero,
    _isActive: isActive,
    _ranking: ranking,
    _senha: senha,
    _id: id,
  }: ClienteModel) {
    super(id);
    this._cpf = cpf;
    this._email = email;
    this._endereco = endereco;
    this._genero = genero;
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._isActive = isActive;
    this._ranking = ranking;
    this._senha = senha;
    this._cartao = cartao
  }
}
