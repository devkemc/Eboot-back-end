import { AbstractEntity } from "./abstract-entity";
import { CartaoEntity } from "./cartao-entity";
import { EnderecoEntity } from "./endereco-Entity";
import { TelefoneEntity } from "./telefone-entity";

type ClienteConstructor = {
  id?: number;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  genero: string;
  cpf: string;
  email: string;
  senha: string;
  ranking: number;
  isActive: boolean;
  cartao?: CartaoEntity;
  endereco: EnderecoEntity;
  telefone: TelefoneEntity;
};
export class ClienteEntity extends AbstractEntity {
  private _nome: string;
  private _sobrenome: string;
  private _dataNascimento: Date;
  private _genero: string;
  private _cpf: string;
  private _email: string;
  private _senha: string;
  private _telefone: TelefoneEntity;
  private _ranking: number;
  private _isActive: boolean;
  private _cartao?: CartaoEntity;
  private _endereco: EnderecoEntity;

  constructor({
    cpf,
    cartao,
    email,
    nome,
    sobrenome,
    endereco,
    genero,
    isActive,
    ranking,
    senha,
    id,
    telefone,
    dataNascimento,
  }: ClienteConstructor) {
    super(id);
    this._cpf = cpf;
    this._email = email;
    this._dataNascimento = dataNascimento;
    this._endereco = endereco;
    this._genero = genero;
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._isActive = isActive = true
    this._ranking = ranking = 0;
    this._senha = senha;
    this._cartao = cartao;
    this._telefone = telefone;
  }

  public get nome() {
    return this._nome;
  }

  public get sobrenome() {
    return this._sobrenome;
  }
  public get dataNascimento() {
    return this._dataNascimento;
  }
  public get email() {
    return this._email;
  }

  public get cpf() {
    return this._cpf;
  }

  public get genero() {
    return this._genero;
  }

  public get senha() {
    return this._senha;
  }

  public get endereco() {
    return this._endereco;
  }

  public get cartao() {
    return this._cartao;
  }

  public get isActive() {
    return this._isActive;
  }

  public get ranking() {
    return this._ranking;
  }

  public get telefone() {
    return this._telefone;
  }
}
