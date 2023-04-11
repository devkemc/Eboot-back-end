import { PrismaClient } from "@prisma/client";
import { Entity } from "../../../domain/interfaces/i-entity";
import { Result } from "../../../presentation/helpers/result";


export abstract class AbstractRepository {
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
}
