import { Entity } from "../../domain/i-entity";
import { AbsServiceCrud } from "../../services/AbsServiceCrud";
import { AbsCommandCrud } from "./abs-command-crud";

export class DeleteCommand extends AbsCommandCrud {
  constructor(service: AbsServiceCrud) {
    super(service);
  }
  public exec(entity: Entity) {
    return this.service.delete(entity);
  }
}
