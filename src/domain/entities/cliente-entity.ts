import { CartaoEntity } from "./cartao-entity";
import { PessoaConstructor, PessoaEntity } from "./pessoa-entity";

interface ClienteConstructor extends PessoaConstructor {
  ranking: number;
  cartao?: CartaoEntity;
}
export class ClienteEntity extends PessoaEntity {
  private _ranking: number;
  private _cartao?: CartaoEntity;
  constructor({
    ranking = 0,
    cartao,
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
  }: ClienteConstructor) {
    super({
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
    });
    this._cartao = cartao;
    this._ranking = ranking;
  }
  public get ranking() {
    return this._ranking;
  }

  public get cartao() {
    return this._cartao;
  }
}
