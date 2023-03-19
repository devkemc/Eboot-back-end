import { Router } from "express";
import { ControllerCrud } from "../controllers/controller-crud";
import { clientes } from "./endpoint";

export const routes = Router();

const controllerCrud = new ControllerCrud();

routes.get("/", controllerCrud.handle);

routes.get(`${clientes}`, controllerCrud.handle);
routes.post(`${clientes}`, controllerCrud.handle);
