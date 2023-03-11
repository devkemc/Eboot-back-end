import { Entity } from "../../domain/i-entity";
import { AbsServiceCrud } from "../../services/AbsServiceCrud";
import { ICommand } from "./i-command";

export abstract class AbsCommandCrud implements ICommand {
  protected service!: AbsServiceCrud;

  constructor(service: AbsServiceCrud) {
    this.service = service;
  }
  public exec(entity: Entity) {
    return Promise.resolve(entity);
  }
}
