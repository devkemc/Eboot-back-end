import { TipoPessoa } from "@prisma/client";
import { AbstractEntity } from "./abstract-entity";
import { CartaoEntity } from "./cartao-entity";
import { EnderecoEntity } from "./endereco-Entity";
import { TelefoneEntity } from "./telefone-entity";

export interface PessoaConstructor {
  id?: number;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  genero: string;
  cpf: string;
  email: string;
  senha: string;
  tipoPessoa: TipoPessoa;
  isActive: boolean;
  endereco: EnderecoEntity;
  telefone: TelefoneEntity;
};
export class PessoaEntity extends AbstractEntity {
  protected _nome: string;
  protected _sobrenome: string;
  protected _dataNascimento: Date;
  protected _genero: string;
  protected _cpf: string;
  protected _email: string;
  protected _senha: string;
  protected _telefone: TelefoneEntity;
  
  private _isActive: boolean;
  private _tipoPessoa: TipoPessoa;
  
  private _endereco: EnderecoEntity;

  constructor({
    cpf,
    email,
    nome,
    sobrenome,
    endereco,
    genero,
    isActive,
    senha,
    id,
    telefone,
    tipoPessoa,
    dataNascimento,
  }: PessoaConstructor) {
    super(id);
    this._cpf = cpf;
    this._email = email;
    this._dataNascimento = dataNascimento;
    this._endereco = endereco;
    this._genero = genero;
    this._nome = nome;
    this._tipoPessoa = tipoPessoa;
    this._sobrenome = sobrenome;
    this._isActive = isActive ? isActive : true;
    this._senha = senha;
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

  public get isActive() {
    return this._isActive;
  }

  
  public get telefone() {
    return this._telefone;
  }
  public get id() {
    return this._id;
  }

  public get tipoPessoa(){
    return this._tipoPessoa;
  }
}
