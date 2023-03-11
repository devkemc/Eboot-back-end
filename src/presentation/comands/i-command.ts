import { Entity } from "../../domain/i-entity";

export interface ICommand {
  exec: (req: Entity) => Promise<Entity>;
}
