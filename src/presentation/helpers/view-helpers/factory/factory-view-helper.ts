import {Request} from "express";
import {pegaPathOriginal} from "../../../utils/pega-path-original";
import {HttpNotFound} from "../../../utils/errors/http-not-found";
import {viewHelperMap} from "./config-view-helper";

export class FactoryViewHelper {
  public static getViewHelper(req: Request) {
    const entityPath = pegaPathOriginal(req.path)
    if (entityPath in viewHelperMap) return new viewHelperMap[entityPath](req)
    throw new HttpNotFound('Endpoint não configurado')
  }
}
