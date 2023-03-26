import { Entity } from "../../domain/interfaces/i-entity";
import { Result } from "../../presentation/helpers/result";

export interface IStrategy {
  processar(entidade: Entity): Promise<Result>;
}
