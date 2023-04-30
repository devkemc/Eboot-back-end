import { PrismaClient } from "@prisma/client";
import { Entity } from "../../../domain/interfaces/i-entity";
import { Result } from "../../../presentation/helpers/result";


export abstract class Conection {
  public static conection: PrismaClient | null = null;
  static getConection(): PrismaClient {
    if (!Conection.conection) {
      Conection.conection = new PrismaClient()
    }
    return Conection.conection
  }

}
