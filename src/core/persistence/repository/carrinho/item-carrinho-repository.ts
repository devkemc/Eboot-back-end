import {IRepositoryCrud} from "../../../interfaces/i-repository-crud";
import {ItemCarrinhoEntity} from "../../../../domain/entities/carrinho/item-carrinho-entity";
import {Result} from "../../../../presentation/helpers/result";
import {Conection} from "../conection";
import {CarrinhoEntity} from "../../../../domain/entities/carrinho/carrinho-entity";
import {HttpBadRequest} from "../../../../presentation/utils/errors/http-bad-request";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {carrinho, itemCarrinho} from "../../../../presentation/routes/endpoint";
import {ItemCarrinhoService} from "../../../services/carrinho/item-carrinho-service";

export class ItemCarrinhoRepository implements IRepositoryCrud {
  public async create(itemCarrinho: ItemCarrinhoEntity): Promise<Result> {
    const result = new Result()
    try {
      await Conection.getConection().$transaction(async (trasanction) => {
        const carrinho = await trasanction.carrinhos.findUnique({
          where: {
            cliente_id: itemCarrinho.carrinho?.id
          },
          select: {
            car_id: true
          }
        })
        result.data = await trasanction.itensCarrinho.create({
          data: {
            produto_id: itemCarrinho.produto!.id!,
            icar_quantidade: itemCarrinho.quantidade!,
            icar_valor_total: itemCarrinho.valorTotal!,
            carrinho_id: carrinho!.car_id,
            tamanho_id: itemCarrinho.tamanho!,
          },
          include: {
            tamanho: true
          }


        })


      })


      result.status = 201;
      result.message = "item adicionado ao carrinho com sucesso";
    } catch (err) {
      throw new HttpBadRequest('Erro ao adicionar item no carrinho')
    }
    return result;
  }

  public async delete(item: ItemCarrinhoEntity): Promise<Result> {
    const result = new Result()
    try {
      const carrinho = await Conection.getConection().itensCarrinho.delete({
        where: {
          icar_id: item.id
        }
      })
      result.data = carrinho
      result.message = "Item excluido do carrinho com sucesso"
      result.status = 200
    } catch (e) {
      throw new HttpBadRequest('Erro ao excluir item do carrinho')
    }
    return result
  }

  getAll(): Promise<Result> {
    return Promise.resolve(new Result());
  }

  public async getOne(carrinho: CarrinhoEntity) {
    const result = new Result()
    try {
      const itensCarrinho = await Conection.getConection().carrinhos.findUnique({
        where: {
          cliente_id: carrinho.id
        },
        include: {
          item_carrinho: {
            include: {
              tamanho: true
            }
          },

        }
      })
      itensCarrinho && (result.data = itensCarrinho)
      result.message = "carrinho recuperado com sucesso";
      result.status = 200;
    } catch (err) {
      throw new HttpBadRequest('Erro ao recuperar item no carrinho')
    }
    return result
  }
  public async getItemCarrinho(item:ItemCarrinhoEntity){
    return await Conection.getConection().itensCarrinho.findUnique({
      where:{
        icar_id: item.id
      }
    })
  }
  public async update(itemCar: ItemCarrinhoEntity): Promise<Result> {
    const result = new Result()
    try {
      const item = await Conection.getConection().itensCarrinho.update({
        where: {
          icar_id: itemCar.id
        },
        data: {
          icar_valor_total: itemCar.valorTotal,
          icar_quantidade: itemCar.quantidade
        }
      })
      result.data = item
      result.message = "Item atualizado com sucesso"
      result.status = 200
    } catch (e) {
      throw new HttpBadRequest('Erro ao alterar item no carrinho')
    }
    return result
  }

}