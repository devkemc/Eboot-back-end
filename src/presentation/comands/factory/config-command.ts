import {AbsCommandCrud} from "../abs-command-crud";
import {httpMethod} from "../../utils/http-methods/http-methods";
import {CreateCommand} from "../create-command";
import {GetAllCommand} from "../get-command";
import {AbsServiceCrud} from "../../../core/services/abs-service-crud";
import {DeleteCommand} from "../delete-command";
import {UpdateCommand} from "../update-command";
import {AbstractEntity} from "../../../domain/entities/abstract-entity";
import {GetOneCommand} from "../get-one-command";

export const commandMap: Record<string, (entity: AbstractEntity) => new (service: AbsServiceCrud) => AbsCommandCrud> = {
  [httpMethod.CRIAR]: (entity: AbstractEntity) => CreateCommand,
  [httpMethod.CONSULTAR]: (entity: AbstractEntity) => entity.id ? GetOneCommand : GetAllCommand,
  [httpMethod.DELETAR]: (entity: AbstractEntity) => DeleteCommand,
  [httpMethod.EDITAR]: (entity: AbstractEntity) => UpdateCommand,
}