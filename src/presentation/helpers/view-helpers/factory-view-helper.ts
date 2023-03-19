import { Request } from "express";
import { clientes } from "../../routes/endpoint";
import { ClienteViewHelper } from "./cliente-view-helper";
import { ProductsViewHelper } from "./product-view-helper";

export class FactoryViewHelper {
  public static getViewHelper(req: Request) {
    switch (req.path) {
      case "/products":
        return new ProductsViewHelper(req);
      case `${clientes}`:
        return new ClienteViewHelper(req);
    }
  }
}
