import { PessoaEntity } from "../../domain/entities/pessoa/pessoa-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "../interfaces/i-strategy";
import { ValidaEndereco } from "./valida-endereco";
import { ValidaTelefone } from "./valida-telefone";

export class ValidarDadosObrigatoriosCliente implements IStrategy {
  async processar(entidade: PessoaEntity): Promise<Result> {
    let result = new Result();
    const validaTel = new ValidaTelefone();
    const validaEnd = new ValidaEndereco();
    if (
      !!entidade.nome &&
      !!entidade.sobrenome &&
      !!entidade.cpf &&
      !!entidade!.usuario!.email! &&
      !!entidade.dataNascimento &&
      !!entidade.genero
    ) {
      result = await validaTel.processar(entidade!.telefone!);
      !result.error && (result = await validaEnd.processar(entidade!.endereco!));
      return result;
    }
    result.error = "Dados invalidos, está faltando dados";
    result.status = 400;
    return result;
  }
}
