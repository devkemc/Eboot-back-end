import { TelefoneEntity } from "../../domain/entities/telefone-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "../interfaces/i-strategy";

export class ValidaTelefone implements IStrategy {
  async processar(entidade: TelefoneEntity): Promise<Result> {
    const result = new Result();
    const isValid = !!entidade.ddd && !!entidade.numero && !!entidade.tipo;
    if (isValid) return result;

    result.error = "Telefone invalido";
    result.status = 400;
    return result;
  }
}
