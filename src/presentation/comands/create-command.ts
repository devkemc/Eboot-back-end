import { AbsServiceCrud } from "../../core/services/abs-service-crud";
import { Entity } from "../../domain/interfaces/i-entity";

import { AbsCommandCrud } from "./abs-command-crud";

export class CreateCommand extends AbsCommandCrud {
  constructor(service: AbsServiceCrud) {
    super(service);
  }
  public async exec(entity: Entity) {
    return await this.service.create(entity);
  }
}
