import { PrismaClient } from "@prisma/client";
import { Entity } from "../../../domain/interfaces/i-entity";
import { Result } from "../../../presentation/helpers/result";

export abstract class AbstractRepository {
  protected conection: PrismaClient;

  constructor() {
    this.conection = new PrismaClient();
  }
  public create(entity: Entity) {
    return Promise.resolve(new Result());
  }

  public getAll() {
    return Promise.resolve(new Result());
  }

  public delete(entity: Entity) {
    return Promise.resolve(new Result());
  }

  public getOne(entity: Entity) {
    return Promise.resolve(new Result());
  }
  public update(entity: Entity) {
    return Promise.resolve(new Result());
  }
}
