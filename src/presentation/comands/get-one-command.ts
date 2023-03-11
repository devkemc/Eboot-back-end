import { Entity } from "../../domain/i-entity";
import { AbsServiceCrud } from "../../services/AbsServiceCrud";
import { AbsCommandCrud } from "./abs-command-crud";

export class GetOneCommand extends AbsCommandCrud {
  constructor(service: AbsServiceCrud) {
    super(service);
  }
  public exec(entity: Entity) {
    return this.service.getOne(entity);
  }
}
