import { Entity } from "../../domain/interfaces/i-entity";

import { AbsCommandCrud } from "./abs-command-crud";
import { getService } from "../../core/services/factory-service";
import { CreateCommand } from "./create-command";
import { DeleteCommand } from "./delete-command";
import { GetAllCommand } from "./get-command";
import { GetOneCommand } from "./get-one-command";
import { UpdateCommand } from "./update-command";
import { AbsServiceCrud } from "../../core/services/abs-service-crud";

export class FactoryCommandCrud {
  static service: AbsServiceCrud;

  public static getCommand(method: Entity, path: string): AbsCommandCrud {
    this.service = getService[path];
    switch (method) {
      case "GET":
        return new GetAllCommand(this.service);
      case "POST":
        return new CreateCommand(this.service);
      case "DELETE":
        return new DeleteCommand(this.service);
      case "PATH":
        return new UpdateCommand(this.service);
      default:
        return new GetOneCommand(this.service);
    }
  }
}
