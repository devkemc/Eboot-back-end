import { PessoaEntity } from "../../domain/entities/pessoa/pessoa-entity";
import { Entity } from "../../domain/interfaces/i-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "../interfaces/i-strategy";
import { ClienteRepository } from "../persistence/repository/cliente/cliente-repository";

export class ValidaExistenciaEmail implements IStrategy {
  processar(entidade: Entity): Promise<Result> {
    const result = new Result();
    const repository = new ClienteRepository();
    return Promise.resolve(result);
  }
}
