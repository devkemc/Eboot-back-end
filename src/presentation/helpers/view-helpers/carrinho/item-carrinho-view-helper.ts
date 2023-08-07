import {AbstractViewHelper} from "../abstract-view-helper";
import {Request} from "express";
import {ProdutoEntity} from "../../../../domain/entities/produto/produto-entity";
import {ItemCarrinhoEntity} from "../../../../domain/entities/carrinho/item-carrinho-entity";
import {CarrinhoEntity} from "../../../../domain/entities/carrinho/carrinho-entity";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {ItensCarrinho} from "@prisma/client";

export class ItemCarrinhoViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    console.log(req.body)
    const {
      itemCarrinhoId,
      clienteId,
      produtoId,
      tamanhoTenis,
      quantidadeProduto
    } = req.body
    const carrinho = new CarrinhoEntity({id: clienteId})
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
      itemCarrinhoId: item.icr_id,
      itemCarrinhoQuantidade: item.icr_quantidade,
      itemCarrinhoTamanho: item.icr_car_id,
      produtoId: item.icr_prd_id,
      carrinhoId: item.icr_prd_id,
      itemCarrinhoValorTotal: item.icr_valor_total

    }

  }
}