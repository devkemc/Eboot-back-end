import { ClienteEntity } from "../../domain/entities/cliente-entity";
import { Result } from "../../presentation/helpers/result";
import { ClienteRepository } from "../persistence/repository/cliente-repository";
import { ValidaExistencia } from "../strategies/valida-existência";
import { ValidaSenhaForte } from "../strategies/valida-senha-forte";
import { ValidarDadosObrigatoriosCliente } from "../strategies/validar-dados-obrigatorios-cliente";
import { AbsServiceCrud } from "./abs-service-crud";

export class ClienteService extends AbsServiceCrud {
  constructor() {
    super();
    this.repository = new ClienteRepository();
    this.strategies = [
      new ValidaSenhaForte(),
      new ValidarDadosObrigatoriosCliente(),
    ];
  }
  public async delete(cliente: ClienteEntity): Promise<Result> {
    const valida = new ValidaExistencia();
    const result = await valida.processar(cliente);
    if (result.error) {
      return result;
    }
    return this.repository.delete(cliente);
  }
  public async update(cliente: ClienteEntity): Promise<Result> {
    const valida = new ValidaExistencia();
    const result = await valida.processar(cliente);
    if (result.error) {
      return result;
    }
    return this.repository.update(cliente);
  }
}
