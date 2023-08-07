import {AbstractViewHelper} from "./abstract-view-helper";
import {Request} from "express";
import {ClienteEntity} from "../../../domain/entities/pessoa/cliente-entity";
import {CartaoEntity} from "../../../domain/entities/pagamento/cartao/cartao-entity";
import {Cartoes} from "@prisma/client";
import {Entity} from "../../../domain/interfaces/i-entity";

export class CartaoViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {clienteId, numeroCartao, nomeImpresso, codSeguranca, bandeiraCartao, validade} = req.body
    const cliente = new ClienteEntity({id: clienteId})
    const cartao = new CartaoEntity({
      id: req.query.clienteId ? Number(req.query.clienteId) : clienteId,
      numeroCartao,
      nomeImpresso,
      codSeguranca,
      bandeiraCartao,
      validade: validade && new Date(validade),
      cliente
    })
    super(cartao)
  }

  public setView(entity: Entity | Entity[]) {
    const cartoes = entity as Cartoes[]
    if(!Array.isArray(cartoes)){
      const cartao = entity as Cartoes
      return{
        nomeImpresso: cartao.crt_nome_impresso,
        numeroCartao: cartao.crt_numero_cartao,
        codSeguranca: cartao.crt_cod_seguranca,
        bandeiraCartao: cartao.crt_bandeira,
        validade: cartao.crt_data_validade
      }
    }
    return cartoes.map((cartao) => ({
      nomeImpresso: cartao.crt_nome_impresso,
      numeroCartao: cartao.crt_numero_cartao,
      codSeguranca: cartao.crt_cod_seguranca,
      bandeiraCartao: cartao.crt_bandeira,
      validade: cartao.crt_data_validade
    }))
  }
}