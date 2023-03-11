import { Entity } from "../../domain/i-entity";
import { endpoints } from "../../routes";
import { AbsServiceCrud } from "../../services/abs-service-crud";
import { ClienteService } from "../../services/cliente-service";
import { AbsCommandCrud } from "./abs-command-crud";
import { configService } from "./config-command";
import { CreateCommand } from "./creat-command";
import { DeleteCommand } from "./delete-command";
import { GetAllCommand } from "./get-command";
import { GetOneCommand } from "./get-one-command";
import { UpdateCommand } from "./update-command";

export class FactoryCommandCrud {
  static service: AbsServiceCrud;

  public static getCommand(method: Entity, path: string): AbsCommandCrud {
    this.service = configService[path];
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
