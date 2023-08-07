import {AbstractViewHelper} from "../abstract-view-helper";
import {Endpoint} from "../../../routes/endpoint";
import {CarrinhoViewHelper} from "../carrinho/carrinho-view-helper";
import {ItemCarrinhoViewHelper} from "../carrinho/item-carrinho-view-helper";
import {ProductsViewHelper} from "../product-view-helper";
import {EnderecoViewHelper} from "../endereco-view-helper";
import {ClienteViewHelper} from "../cliente-view-helper";
import {Request} from "express";
import {CartaoViewHelper} from "../cartao-view-helper";

export const viewHelperMap: Record<string, new (req: Request) => AbstractViewHelper> = {
  [Endpoint.CARRINHO]: CarrinhoViewHelper,
  [Endpoint.ITEM_CARRINHO]: ItemCarrinhoViewHelper,
  [Endpoint.PRODUTOS]: ProductsViewHelper,
  [Endpoint.ENDERECOS]: EnderecoViewHelper,
  [Endpoint.CARTOES]: CartaoViewHelper,
  [Endpoint.CLIENTES]: ClienteViewHelper
}