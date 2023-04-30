import {clientes, produtos} from "../../presentation/routes/endpoint";
import { ClienteService } from "../services/cliente-service";
import {ProdutoService} from "./produto-service";

export class FactoryService {
  public static createService(path: string) {
    switch (path) {
      case clientes:
        return new ClienteService()
      case produtos:
        return new ProdutoService()
      default:
        return new ClienteService()
    }
  }
}