import { Request, Response } from "express";
import { endpoints } from "../../routes";
import { FactoryCommandCrud } from "../comands/factory-command-crud";

export class ControllerCrud {
 
  constructor() {}
  public async handle(req: Request, res: Response) {  
    console.log('chegou na cont');
      
    const cmd = FactoryCommandCrud.getCommand(req.method, req.path);
    const result = await cmd.exec(req)
    res.json('deu certo')
  }
}
