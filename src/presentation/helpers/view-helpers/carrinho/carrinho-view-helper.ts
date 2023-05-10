import {AbstractViewHelper} from "../abstract-view-helper";
import {Request} from "express";
import {CarrinhoEntity} from "../../../../domain/entities/carrinho/carrinho-entity";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {Carrinhos} from "@prisma/client";

interface CarrinhoComItem extends Carrinhos {
  item_carrinho: [{
    icar_valor_total: number
  }]
}

export class CarrinhoViewHelper extends AbstractViewHelper {
  constructor(req: Request
  ) {
    const {carrinhoId} = req.body
    const carrinho = new CarrinhoEntity({id: req.query.id ? Number(req.query.id) : carrinhoId})
    super(carrinho);
  }

  public setView(entity: Entity) {
    const initialValue = 0
    const carrinho = entity as CarrinhoComItem
    return {
      carrinhoId: carrinho.car_id,
      valorTotalCarrinho: carrinho.item_carrinho.reduce((accumulator, currentValue) => accumulator + currentValue.icar_valor_total,
        initialValue
      ),
      itensCarrinho: carrinho.item_carrinho,

    }
  }
}