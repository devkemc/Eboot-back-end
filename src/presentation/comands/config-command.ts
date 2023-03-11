import { ClienteService } from "../../services/ClientsService";
const clientes: string = "/clientes";

export const configService = {
  [clientes]: new ClienteService(),
};
