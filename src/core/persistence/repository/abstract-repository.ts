import { PrismaClient } from "@prisma/client";
import { Entity } from "../../../domain/interfaces/i-entity";
import { Result } from "../../../presentation/helpers/result";
import { IRepository } from "../../interfaces/i-repository";

export abstract class AbstractRepository implements IRepository {
  protected conection: PrismaClient;

  constructor() {
    this.conection = new PrismaClient();
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
