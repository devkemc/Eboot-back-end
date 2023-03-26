import { empty } from "@prisma/client/runtime";
import { Entity } from "../../domain/interfaces/i-entity";
import { AbstractRepository } from "../persistence/repository/abstract-repository";
import { IStrategy } from "../interfaces/i-strategy";

export abstract class AbsServiceCrud {
  protected repository!: AbstractRepository;
  protected strategies!: Array<IStrategy>;
  constructor() {}

  public async create(entity: Entity) {
    let result;
    for (let strategy of this.strategies) {
      result = await strategy.processar(entity);
      if (result.error) {
        return result;
      }
    }
    return await this.repository.create(entity);
  }

  public getAll() {
    return this.repository.getAll();
  }

  public delete(entity: Entity) {
    return this.repository.delete(entity);
  }

  public getOne(entity: Entity) {
    return this.repository.getOne(entity);
  }
  public update(entity: Entity) {
    return this.repository.update(entity);
  }
}