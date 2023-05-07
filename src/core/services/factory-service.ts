import {clientes, enderecos, produtos} from "../../presentation/routes/endpoint";
import { ClienteService } from "./cliente-service";
import {ProdutoService} from "./produto-service";
import {HttpNotFound} from "../../presentation/utils/errors/http-not-found";
import {pegaPathOriginal} from "../../presentation/utils/pega-path-original";
import {EnderecoService} from "./endereco-service";

export class FactoryService {
  public static createService(path: string) {
    const entityPath = pegaPathOriginal(path)
    switch (entityPath) {
      case clientes:
        return new ClienteService()
      case produtos:
        return new ProdutoService()
      case enderecos:
        return new EnderecoService()
      default:
        throw new HttpNotFound('Service não configura para este endpoint')
    }
  }
}