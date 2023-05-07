import {empty} from "@prisma/client/runtime";
import {Entity} from "../../domain/interfaces/i-entity";
import {Conection} from "../persistence/repository/conection";
import {IStrategy} from "../interfaces/i-strategy";
import {IRepositoryCrud} from "../interfaces/i-repository-crud";

export abstract class AbsServiceCrud {
  protected repository!: IRepositoryCrud;
  protected strategies!: Array<IStrategy>;

  constructor() {
  }

  public async create(entity: Entity) {
    let result;
    if (Array.isArray(this.strategies) && this.strategies.length >= 1) {
      for (let strategy of this.strategies) {
        result = await strategy.processar(entity);
        if (result.error) {
          return result;
        }
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
