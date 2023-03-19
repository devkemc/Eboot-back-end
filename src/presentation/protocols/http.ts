import { Entity } from "../../domain/interfaces/i-entity";

export type HttpResponse = {
  statusCode: number;
  message: string;
  data: Entity;
};
