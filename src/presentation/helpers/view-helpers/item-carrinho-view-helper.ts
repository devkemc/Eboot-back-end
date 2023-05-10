import {AbstractViewHelper} from "./abstract-view-helper";
import {Request} from "express";
import {ProdutoEntity} from "../../../domain/entities/produto/produto-entity";
import {ItemCarrinhoEntity} from "../../../domain/entities/carrinho/item-carrinho-entity";
import {CarrinhoEntity} from "../../../domain/entities/carrinho/carrinho-entity";
import {Entity} from "../../../domain/interfaces/i-entity";
import {ItensCarrinho} from "@prisma/client";
import {itemCarrinho} from "../../routes/endpoint";

export class ItemCarrinhoViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {
      itemCarrinhoId,
      carrinhoId,
      produtoId,
      tamanhoTenis,
      quantidadeProduto
    } = req.body
    const carrinho = new CarrinhoEntity({id: carrinhoId})
    const produto = new ProdutoEntity({id: produtoId})
    const itemCarrinho = new ItemCarrinhoEntity({
      id: itemCarrinhoId,
      produto,
      quantidade: quantidadeProduto,
      tamanho: tamanhoTenis,
      carrinho
    })
    super(itemCarrinho);
  }

  public setView(entity: Entity): Entity {
    const item = entity as ItensCarrinho
    return {
      itemCarrinhoId: item.icar_id,
      itemCarrinhoQuantidade: item.icar_quantidade,
      itemCarrinhoTamanho: item.icar_tamanho,
      produtoId: item.produto_id,
      carrinhoId: item.carrinho_id,
      itemCarrinhoValorTotal: item.icar_valor_total

    }

  }
}