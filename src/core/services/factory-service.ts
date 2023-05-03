import {clientes, produtos} from "../../presentation/routes/endpoint";
import { ClienteService } from "./cliente-service";
import {ProdutoService} from "./produto-service";
import {HttpNotFound} from "../../presentation/utils/errors/http-not-found";

export class FactoryService {
  public static createService(path: string) {
    const arrPath   = path.split('/')
    arrPath.length > 2 && arrPath.pop()
    const pathCase = arrPath.join('/')
    switch (pathCase) {
      case clientes:
        return new ClienteService()
      case produtos:
        return new ProdutoService()
      default:
        throw new HttpNotFound('Service não configura para este endpoint')
    }
  }
}