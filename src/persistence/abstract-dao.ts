import { PrismaClient } from "@prisma/client";

export abstract class AbstractDao {
  protected conection: PrismaClient;

  constructor() {
    this.conection = new PrismaClient();
  }
}
