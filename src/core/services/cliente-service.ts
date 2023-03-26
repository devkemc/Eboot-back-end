import { ClienteRepository } from "../persistence/repository/cliente-repository";
import { ValidaSenhaForte } from "../strategies/valida-senha-forte";
import { ValidaTelefone } from "../strategies/valida-telefone";
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
}
