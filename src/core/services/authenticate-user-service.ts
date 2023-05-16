import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";
import {HttpUnauthorized} from "../../presentation/utils/errors/http-unauthorized";
import {Result} from "../../presentation/helpers/result";
import {ClienteService} from "./cliente-service";
import {Pessoas} from "@prisma/client";
import {ClienteRepository} from "../persistence/repository/cliente/cliente-repository";

interface IAuthenticateRequest {
  email: string;
  senha: string;
}

export class AuthenticateUserService {
  private repository;

  constructor() {
    this.repository = new ClienteRepository();
  }

  async authenticateUser({email, senha}: IAuthenticateRequest) {

    const user: Partial<Pessoas> | null = await this.repository.findUserByEmail(email);

    if (!user) throw new HttpUnauthorized("Email ou senha incorretos!");
    const validatePassword = await compare(senha, <string>user?.pes_senha);

    if (!validatePassword) throw new HttpUnauthorized("Email ou senha incorretos!");

    const result = new Result()
    const token = sign(
      {
        email: user.pes_email,
      },
      "4f93ac9d10cb751b8c9c646bc9dbccb9",
      {
        subject: String(user.pes_id),
        expiresIn: "1d",
      });
      result.data = {
        id:user.pes_id,
        admin: user.pes_admin,
        token:token,}
      result.status=200
      result.message ='Login efetuado com sucesso'
      return result
  }
}
