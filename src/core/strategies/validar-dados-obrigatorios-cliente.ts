import { ClienteEntity } from "../../domain/entities/cliente-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "./i-strategy";
import { ValidaTelefone } from "./valida-telefone";

export class ValidarDadosObrigatoriosCliente implements IStrategy {
  async processar(entidade: ClienteEntity): Promise<Result> {
    const result = new Result();
    const validaTel = new ValidaTelefone();
    if (
      entidade.nome &&
      entidade.sobrenome &&
      entidade.cpf &&
      entidade.email &&
      entidade.dataNascimento
    ) {
      return await validaTel.processar(entidade.telefone);
    }
    result.error = "Dados do cliente invalido";
    result.status = 400;
    return result;
  }
}
