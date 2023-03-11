import { ClienteService } from "../../services/cliente-service";
const clientes: string = "/clientes";

export const configService = {
  [clientes]: new ClienteService(),
};
