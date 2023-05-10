import {IRepositoryCrud} from "../../interfaces/i-repository-crud";
import {ItemCarrinhoEntity} from "../../../domain/entities/carrinho/item-carrinho-entity";
import {Result} from "../../../presentation/helpers/result";
import {Conection} from "./conection";
import {CarrinhoEntity} from "../../../domain/entities/carrinho/carrinho-entity";
import {HttpBadRequest} from "../../../presentation/utils/errors/http-bad-request";
import {Entity} from "../../../domain/interfaces/i-entity";

export class ItemCarrinhoRepository implements IRepositoryCrud{
  public async create(itemCarrinho: ItemCarrinhoEntity): Promise<Result> {
    const result = new Result()
    try{
      result.data = await Conection.getConection().itensCarrinho.create({
        data:{
          produto_id: itemCarrinho.produto!.id!,
          icar_tamanho: itemCarrinho.tamanho!,
          icar_quantidade: itemCarrinho.quantidade!,
          icar_valor_total: itemCarrinho.valorTotal!,
          carrinho_id : itemCarrinho.carrinho!.id!,

        }
      })
      result.status = 201;
      result.message = "item adicionado ao carrinho com sucesso";
    }
    catch (err){
      throw new HttpBadRequest('Erro ao adicionar item no carrinho')
    }
    return result;
  }

  delete(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getAll(): Promise<Result> {
    return Promise.resolve(new Result());
  }

  public async getOne(carrinho: CarrinhoEntity) {
    const result = new Result()
    try{
      const itensCarrinho = await Conection.getConection().carrinhos.findUnique({
        where:{
          car_id: carrinho.id
        },
        include:{
          item_carrinho: true
        }
      })
      itensCarrinho && (result.data = itensCarrinho)
      result.message = "carrinho recuperado com sucesso";
      result.status = 200;
    }
    catch (err){
      throw new HttpBadRequest('Erro ao recuperar item no carrinho')
    }
    return result
  }

  update(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

}