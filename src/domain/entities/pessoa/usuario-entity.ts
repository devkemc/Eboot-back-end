import {hash} from "bcryptjs";

export interface UsuarioConstructor {
  email: string
  senha: string
  admin?: boolean
}

export class UsuarioEntity {
  private _email: string
  private _senha: string
  private _admin?: boolean

  constructor(data: UsuarioConstructor) {
    this._email = data.email
    this._senha = data.senha
    this._admin = data.admin
  }

  public get email() {
    return this._email
  }

  public get senha() {
    return this._senha
  }

  public get admin() {
    return this._admin
  }

  public async criptografarSenha() {
    try {
      this._senha = await hash(this._senha, 8)
    } catch (e) {
      console.error('Erro ao criptografar senha', e)
    }

  }

}