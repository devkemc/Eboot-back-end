import { Router } from "express";
import { CrudController } from "../controllers/crud-controller";
import { clientes } from "./endpoint";
import { AuthenticateUserController } from "../controllers/authenticate-user-controller";
import { ensureAuthenticated } from "../middlewares/ensure-authenticated";

export const routes = Router();

const controllerCrud = new CrudController();
const authenticateUserController = new AuthenticateUserController();
routes.get("/", controllerCrud.handle);
routes.post(`${clientes}`, controllerCrud.handle);
routes.post("/login", authenticateUserController.handle);
routes.use(ensureAuthenticated);
routes.get(`${clientes}`, controllerCrud.handle);
routes.get(`${clientes}/:id`, controllerCrud.handle);
routes.delete(`${clientes}`, controllerCrud.handle);
routes.patch(`${clientes}`, controllerCrud.handle);
