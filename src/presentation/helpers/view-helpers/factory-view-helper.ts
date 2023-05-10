import {Request} from "express";
import {carrinho, clientes, enderecos, itemCarrinho, produtos} from "../../routes/endpoint";
import {ClienteViewHelper} from "./cliente-view-helper";
import {ProductsViewHelper} from "./product-view-helper";
import {pegaPathOriginal} from "../../utils/pega-path-original";
import {EnderecoViewHelper} from "./endereco-view-helper";
import {ItemCarrinhoViewHelper} from "./carrinho/item-carrinho-view-helper";
import {CarrinhoViewHelper} from "./carrinho/carrinho-view-helper";
import {HttpNotFound} from "../../utils/errors/http-not-found";

export class FactoryViewHelper {
  public static getViewHelper(req: Request) {
    const path = pegaPathOriginal(req.path)
    switch (path) {
      case produtos:
        return new ProductsViewHelper(req);
      case clientes:
        return new ClienteViewHelper(req);
      case enderecos:
        return new EnderecoViewHelper(req);
      case itemCarrinho:
        return new ItemCarrinhoViewHelper(req);
      case carrinho:
        return new CarrinhoViewHelper(req)
      default:
       throw new HttpNotFound('Endpoint não configurado')

    }
  }
}
