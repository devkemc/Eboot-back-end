import { Request } from "express";
import { clientes } from "../../routes/endpoint";
import { ClienteViewHelper } from "./cliente-view-helper";
import { ProductsViewHelper } from "./product-view-helper";

export class FactoryViewHelper {
  public static getViewHelper(req: Request) {
    const path = `/${req.path.split("/").slice(1, 2).join()}`;
    switch (path) {
      case "/products":
        return new ProductsViewHelper(req);
      case `${clientes}`:
        return new ClienteViewHelper(req);
    }
  }
}
