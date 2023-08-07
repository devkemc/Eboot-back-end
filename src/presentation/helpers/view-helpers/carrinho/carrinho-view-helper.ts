import {AbstractViewHelper} from "../abstract-view-helper";
import {Request} from "express";
import {CarrinhoEntity} from "../../../../domain/entities/carrinho/carrinho-entity";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {Carrinhos} from "@prisma/client";
import {ClienteEntity} from "../../../../domain/entities/pessoa/cliente-entity";

interface CarrinhoComItem extends Carrinhos {
  item_carrinho: [{
    icr_valor_total: number
  }]
}

export class CarrinhoViewHelper extends AbstractViewHelper {
  constructor(req: Request
  ) {
    const carrinho = new CarrinhoEntity({id: req.query.clienteId ? Number(req.query.clienteId) : 1})
    super(carrinho);
  }

  public setView(entity: Entity) {
    const initialValue = 0
    const carrinho = entity as CarrinhoComItem
    return {
      carrinhoId: carrinho.car_id,
      valorTotalCarrinho: carrinho.item_carrinho.reduce((accumulator, currentValue) => accumulator + currentValue.icr_valor_total,
        initialValue
      ),
      itensCarrinho: carrinho.item_carrinho,

    }
  }
}