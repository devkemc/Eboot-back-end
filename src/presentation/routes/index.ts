import { Router } from "express";
import { CrudController } from "../controllers/crud-controller";
import { clientes } from "./endpoint";

export const routes = Router();

const controllerCrud = new CrudController();

routes.get("/", controllerCrud.handle);

routes.get(`${clientes}`, controllerCrud.handle);
routes.get(`${clientes}/:id`, controllerCrud.handle);
routes.post(`${clientes}`, controllerCrud.handle);
routes.delete(`${clientes}`, controllerCrud.handle);
routes.patch(`${clientes}`, controllerCrud.handle);
