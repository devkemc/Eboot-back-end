import {IRepositoryCrud} from "../../../interfaces/i-repository-crud";
import {ItemCarrinhoEntity} from "../../../../domain/entities/carrinho/item-carrinho-entity";
import {Result} from "../../../../presentation/helpers/result";
import {Conection} from "../conection";
import {CarrinhoEntity} from "../../../../domain/entities/carrinho/carrinho-entity";
import {HttpBadRequest} from "../../../../presentation/utils/errors/http-bad-request";

export class ItemCarrinhoRepository implements IRepositoryCrud {
  public async create(itemCarrinho: ItemCarrinhoEntity): Promise<Result> {
    const result = new Result()
    try {
      await Conection.getConection().$transaction(async (trasanction) => {
        const carrinho = await trasanction.carrinhos.findUnique({
          where: {
            car_cli_id: itemCarrinho.carrinho?.id
          },
          select: {
            car_id: true
          }
        })
        result.data = await trasanction.itensCarrinho.create({
          data: {
            icr_prd_id: itemCarrinho.produto!.id!,
            icr_quantidade: itemCarrinho.quantidade!,
            icr_valor_total: itemCarrinho.valorTotal!,
            icr_car_id: carrinho!.car_id,
            icr_tam_id: itemCarrinho.tamanho!,
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
          icr_id: item.id
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
          car_cli_id: carrinho.id
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

  public async getItemCarrinho(item: ItemCarrinhoEntity) {
    return await Conection.getConection().itensCarrinho.findUnique({
      where: {
        icr_id: item.id
      }
    })
  }

  public async update(itemCar: ItemCarrinhoEntity): Promise<Result> {
    const result = new Result()
    try {
      const item = await Conection.getConection().itensCarrinho.update({
        where: {
          icr_id: itemCar.id
        },
        data: {
          icr_valor_total: itemCar.valorTotal,
          icr_quantidade: itemCar.quantidade
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