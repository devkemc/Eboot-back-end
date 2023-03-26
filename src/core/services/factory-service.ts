import { clientes } from "../../presentation/routes/endpoint";
import { ClienteService } from "../services/cliente-service";

export class FactoryService {
  public static createService(path: string) {
    switch (path) {
      case clientes:
        return new ClienteService();
      default:
        return new ClienteService();
    }
  }
}
