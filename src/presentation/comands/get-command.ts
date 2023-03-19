import { AbsServiceCrud } from "../../core/services/abs-service-crud";
import { Entity } from "../../domain/interfaces/i-entity";

import { AbsCommandCrud } from "./abs-command-crud";

export class GetAllCommand extends AbsCommandCrud {
  constructor(service: AbsServiceCrud) {
    super(service);
  }
  public exec() {
    return this.service.getAll();
  }
}
