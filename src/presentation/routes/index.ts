import { Router } from "express";
import { CrudController } from "../controllers/crud-controller";
import {itemCarrinho, clientes, enderecos, produtos} from "./endpoint";
import { AuthenticateUserController } from "../controllers/authenticate-user-controller";
import { ensureAuthenticated } from "../middlewares/ensure-authenticated";

export const routes = Router();

const controllerCrud = new CrudController();
const authenticateUserController = new AuthenticateUserController();
routes.post(`${clientes}`, controllerCrud.handle);
routes.get(`${produtos}`, controllerCrud.handle)
routes.get(`${produtos}`, controllerCrud.handle)
routes.post("/login", authenticateUserController.handle);

routes.use(ensureAuthenticated);

routes.get(`${clientes}`, controllerCrud.handle);
routes.delete(`${clientes}`, controllerCrud.handle);
routes.patch(`${clientes}`, controllerCrud.handle);

routes.post(`${enderecos}`, controllerCrud.handle)
routes.get(`${enderecos}`, controllerCrud.handle)

routes.post(`${itemCarrinho}`, controllerCrud.handle)
routes.get(`${itemCarrinho}`, controllerCrud.handle)
