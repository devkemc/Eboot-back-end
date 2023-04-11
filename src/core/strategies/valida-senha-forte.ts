import { PessoaEntity } from "../../domain/entities/pessoa-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "../interfaces/i-strategy";

export class ValidaSenhaForte implements IStrategy {
  async processar(entidade: PessoaEntity): Promise<Result> {
    const result = new Result();
    const senhaValida =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (senhaValida.test(entidade.senha)) return result;
    result.error =
      "Senha inválida. A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um caractere especial.";
    result.status = 400;
    return result;
  }
}
