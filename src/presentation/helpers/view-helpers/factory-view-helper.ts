import {Request} from "express";
import {clientes, produtos} from "../../routes/endpoint";
import {ClienteViewHelper} from "./cliente-view-helper";
import {ProductsViewHelper} from "./product-view-helper";

export class FactoryViewHelper {
  public static getViewHelper(req: Request) {
    const path = `/${req.path.split("/").slice(1, 2).join()}`;
    switch (path) {
      case `${produtos}`:
        return new ProductsViewHelper(req);
      case `${clientes}`:
        return new ClienteViewHelper(req);
      default:
        return new ClienteViewHelper(req);

    }
  }
}
