import { PessoaEntity } from "../../domain/entities/pessoa/pessoa-entity";
import { Entity } from "../../domain/interfaces/i-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "../interfaces/i-strategy";
import { ClienteRepository } from "../persistence/repository/cliente/cliente-repository";

export class ValidaExistencia implements IStrategy {
  async processar(cliente: PessoaEntity): Promise<Result> {
    const result = new Result();
    const repository = new ClienteRepository();

    const cli = await (await repository.getOne(cliente)).data;
    if (!!cli) return result;
    result.status = 400;
    result.error = "cliente não existe";
    return result;
  }
}
