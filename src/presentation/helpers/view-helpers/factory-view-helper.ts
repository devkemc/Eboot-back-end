import {Request} from "express";
import {clientes, enderecos, produtos} from "../../routes/endpoint";
import {ClienteViewHelper} from "./cliente-view-helper";
import {ProductsViewHelper} from "./product-view-helper";
import {pegaPathOriginal} from "../../utils/pega-path-original";
import {EnderecoViewHelper} from "./endereco-view-helper";

export class FactoryViewHelper {
  public static getViewHelper(req: Request) {
    const path = pegaPathOriginal(req.path)
    switch (path) {
      case produtos:
        return new ProductsViewHelper(req);
      case clientes:
        return new ClienteViewHelper(req);
      case enderecos:
        return new EnderecoViewHelper(req)
      default:
        return new ClienteViewHelper(req);

    }
  }
}
