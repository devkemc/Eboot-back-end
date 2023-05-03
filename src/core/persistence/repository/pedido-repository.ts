import {IRepositoryCrud} from "../../interfaces/i-repository-crud";
import {Entity} from "../../../domain/interfaces/i-entity";
import {Result} from "../../../presentation/helpers/result";

export class PedidoRepository implements IRepositoryCrud{
  create(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  delete(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getAll(): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getOne(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  update(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

}