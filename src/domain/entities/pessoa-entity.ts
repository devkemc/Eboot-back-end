
import { AbstractEntity } from "./abstract-entity";
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
  
  private _endereco: EnderecoEntity;

  constructor(pessoa: PessoaConstructor) {
    super(pessoa.id);
    this._cpf = pessoa.cpf;
    this._email = pessoa.email;
    this._dataNascimento = pessoa.dataNascimento;
    this._endereco = pessoa.endereco;
    this._genero = pessoa.genero;
    this._nome = pessoa.nome;
    this._sobrenome = pessoa.sobrenome;
    this._isActive = pessoa.isActive ? pessoa.isActive : true;
    this._senha = pessoa.senha;
    this._telefone = pessoa.telefone;
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

}
