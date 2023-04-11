import { PessoaEntity } from "../../domain/entities/pessoa-entity";
import { Entity } from "../../domain/interfaces/i-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "../interfaces/i-strategy";
import { PessoaRepository } from "../persistence/repository/cliente-repository";

export class ValidaExistenciaEmail implements IStrategy {
  processar(entidade: Entity): Promise<Result> {
    const result = new Result();
    const repository = new PessoaRepository();
    return Promise.resolve(result);
  }
}
