import { Router } from "express";
import { CrudController } from "../controllers/crud-controller";
import {Endpoint} from "./endpoint";
import { AuthenticateUserController } from "../controllers/authenticate-user-controller";
import { ensureAuthenticated } from "../middlewares/ensure-authenticated";

export const routes = Router();

const controllerCrud = new CrudController();
const authenticateUserController = new AuthenticateUserController();

routes.post(Endpoint.CLIENTES, controllerCrud.handle);
routes.get(Endpoint.PRODUTOS, controllerCrud.handle)
routes.post(Endpoint.LOGIN, authenticateUserController.handle);

routes.use(ensureAuthenticated);

routes.get(Endpoint.CLIENTES, controllerCrud.handle);
routes.delete(Endpoint.CLIENTES, controllerCrud.handle);
routes.patch(Endpoint.CLIENTES, controllerCrud.handle);

routes.post(Endpoint.ENDERECOS, controllerCrud.handle)
routes.get(Endpoint.ENDERECOS, controllerCrud.handle)

routes.post(Endpoint.ITEM_CARRINHO, controllerCrud.handle)
routes.patch(Endpoint.ITEM_CARRINHO, controllerCrud.handle)
routes.delete(Endpoint.ITEM_CARRINHO, controllerCrud.handle)
routes.get(Endpoint.CARRINHO, controllerCrud.handle)

routes.get(Endpoint.CARTOES, controllerCrud.handle)
routes.post(Endpoint.CARTOES, controllerCrud.handle)




