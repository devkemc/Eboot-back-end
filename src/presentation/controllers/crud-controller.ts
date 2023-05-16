import { json, Request, Response } from "express";
import { FactoryViewHelper } from "../helpers/view-helpers/factory/factory-view-helper";
import { FactoryCommandCrud } from "../comands/factory-command-crud";
import { Entity } from "../../domain/interfaces/i-entity";
import {TiposLogradouro} from "@prisma/client";

export class CrudController {
  public async handle(req: Request, res: Response) {
    const viewHelper = FactoryViewHelper.getViewHelper(req);
    const entity = viewHelper!.getView();
    const cmd = FactoryCommandCrud.getCommand(req.method, req.path, entity);
    const result = await cmd.exec(entity);
    result.data && (result.data = viewHelper?.setView(result.data) as Entity[]);
    res.status(result.status).json(result.getResult());
  }
}
