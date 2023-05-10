import {IRepositoryCrud} from "../../../interfaces/i-repository-crud";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {Result} from "../../../../presentation/helpers/result";
import {CarrinhoEntity} from "../../../../domain/entities/carrinho/carrinho-entity";
import {Conection} from "../conection";
import {HttpBadRequest} from "../../../../presentation/utils/errors/http-bad-request";

export class CarrinhoRepository implements IRepositoryCrud {
  create(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  delete(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getAll(): Promise<Result> {
    return Promise.resolve(new Result());
  }

  public async getOne(entity: CarrinhoEntity): Promise<Result> {
    const result = new Result()
    try {
      const carrinho = await Conection.getConection().carrinhos.findUnique({
        where: {
          car_id: entity.id
        },
        include: {
          item_carrinho: true
        }
      })
      carrinho && (result.data = carrinho)
      console.log(carrinho)
      result.message = "Carrinho recuperado com sucesso"
      result.status = 200
    } catch (e) {
      console.log(e)
      throw  new HttpBadRequest('Erro ao consultar carrinho')
    }
    return result
  }

  update(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

}