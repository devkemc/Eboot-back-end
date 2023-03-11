import { Entity } from "../../domain/i-entity";
import { AbsServiceCrud } from "../../services/AbsServiceCrud";
import { AbsCommandCrud } from "./abs-command-crud";

export class UpdateCommand extends AbsCommandCrud {
  constructor(service: AbsServiceCrud) {
    super(service);
  }
  public exec(entity: Entity) {
    return this.service.update(entity);
  }
}
