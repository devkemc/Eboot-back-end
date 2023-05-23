import {Entity} from "../../../domain/interfaces/i-entity";

import {AbsCommandCrud} from "../abs-command-crud";
import {CreateCommand} from "../create-command";
import {DeleteCommand} from "../delete-command";
import {GetAllCommand} from "../get-command";
import {GetOneCommand} from "../get-one-command";
import {UpdateCommand} from "../update-command";
import {AbsServiceCrud} from "../../../core/services/abs-service-crud";
import {FactoryService} from "../../../core/services/factory/factory-service";
import {AbstractEntity} from "../../../domain/entities/abstract-entity";
import {commandMap} from "./config-command";
import {HttpNotFound} from "../../utils/errors/http-not-found";

export class FactoryCommandCrud {
  static service: AbsServiceCrud;

  public static createCommand(
    method: string,
    path: string,
    entity: AbstractEntity
  ) {
    this.service = FactoryService.createService(path);
    if (method in commandMap) {
      const command = commandMap[method](entity)
      return new command(this.service)
    }
    throw new HttpNotFound('Command não configurada')
  }
}
