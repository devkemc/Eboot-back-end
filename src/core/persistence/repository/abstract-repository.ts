import { PrismaClient } from "@prisma/client";
import { Entity } from "../../../domain/interfaces/i-entity";
import { Result } from "../../../presentation/helpers/result";
import { IRepository } from "../../interfaces/i-repository";

export abstract class AbstractRepository implements IRepository {
  private _conection!: PrismaClient;

  constructor() {}
  get conection(): PrismaClient {
    if (!this._conection) {
      this._conection = new PrismaClient();
    }
    return this._conection;
  }
  async destroy(): Promise<void> {
    if (this._conection) {
      await this._conection.$disconnect();
    }
  }
  create(entity: Entity): Promise<Result> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Result> {
    throw new Error("Method not implemented.");
  }
  delete(entity: Entity): Promise<Result> {
    throw new Error("Method not implemented.");
  }
  getOne(entity: Entity): Promise<Result> {
    throw new Error("Method not implemented.");
  }
  update(entity: Entity): Promise<Result> {
    throw new Error("Method not implemented.");
  }
}
