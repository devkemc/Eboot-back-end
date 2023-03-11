import { Router, Request, Response } from "express";
import { ControllerCrud } from "../presentation/controllers/controller-crud";

export enum endpoints {
    CLIENTES = 'clientes'
}

export const routes = Router()

const controllerCrud = new ControllerCrud()

routes.get('/',controllerCrud.handle)

for (let endpoint in endpoints){
    console.log(endpoint);
    
    routes.get(`/${endpoint}`,controllerCrud.handle)
}