import { AbsServiceCrud } from "../../core/services/abs-service-crud";
import { Entity } from "../../domain/interfaces/i-entity";

import { AbsCommandCrud } from "./abs-command-crud";

export class GetOneCommand extends AbsCommandCrud {
  constructor(service: AbsServiceCrud) {
    super(service);
  }
  public exec(entity: Entity) {
    return this.service.getOne(entity);
  }
}
