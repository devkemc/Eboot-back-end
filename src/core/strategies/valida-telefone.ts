import { TelefoneEntity } from "../../domain/entities/telefone-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "./i-strategy";

export class ValidaTelefone implements IStrategy {
  async processar(entidade: TelefoneEntity): Promise<Result> {
    const result = new Result();
    if (entidade.ddd && entidade.numero && entidade.tipo) return result;
    result.error = "Telefone invalido";
    result.status = 400;
    return result;
  }
}
