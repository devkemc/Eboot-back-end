import { AbsServiceCrud } from "../../core/services/abs-service-crud";
import { Entity } from "../../domain/interfaces/i-entity";
import { Result } from "../helpers/result";

import { ICommand } from "./i-command";

export abstract class AbsCommandCrud implements ICommand {
  protected service!: AbsServiceCrud;

  constructor(service: AbsServiceCrud) {
    this.service = service;
  }
  public async exec(entity: Entity) {
    return await Promise.resolve(new Result());
  }
}
