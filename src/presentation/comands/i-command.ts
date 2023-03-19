import { Entity } from "../../domain/interfaces/i-entity";

export interface ICommand {
  exec: (req: Entity) => Promise<Entity>;
}
