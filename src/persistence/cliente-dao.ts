import { ClienteModel } from "../domain/models/cliente-model";
import { AbstractDao } from "./abstract-dao";

export class ClienteDao extends AbstractDao {
  public save(entity: ClienteModel) {
    this.conection.cliente;
  }
}
