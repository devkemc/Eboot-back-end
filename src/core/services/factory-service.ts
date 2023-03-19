import { clientes } from "../../presentation/routes/endpoint";
import { ClienteRepository } from "../persistence/repository/cliente-repository";
import { ClienteService } from "../services/cliente-service";
import { ValidaSenhaForte } from "../strategies/valida-senha-forte";
import { ValidarDadosObrigatoriosCliente } from "../strategies/validar-dados-obrigatorios-cliente";

export const getService = {
  [clientes]: new ClienteService(new ClienteRepository(), [
    new ValidaSenhaForte(),
    new ValidarDadosObrigatoriosCliente(),
  ]),
};
