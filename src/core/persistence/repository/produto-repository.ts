import {Conection} from "./conection";
import {IRepositoryCrud} from "../../interfaces/i-repository-crud";
import {Result} from "../../../presentation/helpers/result";
import {Entity} from "../../../domain/interfaces/i-entity";
import {ProdutoEntity} from "../../../domain/entities/produto-entity";

export class ProdutoRepository  implements IRepositoryCrud{
  public async create(entity: Entity): Promise<Result> {
    return  new Result()
  }

  public async delete(entity: Entity): Promise<Result> {
    return new Result()
  }

  public async getAll(): Promise<Result> {
    const  result = new Result()
    try{
      result.data = await Conection.getConection().produtos.findMany({
        include:{
          categorias:true
        }
      })
      result.status = 200
      result.message = "produtos recuperados com sucesso"
    }catch {
      result.status = 400;
      result.error = 'deu ruim'
    }
    return result
  }

  public async getOne(entity: ProdutoEntity): Promise<Result> {
    const  result = new Result()
    try{
      const product = await Conection.getConection().produtos.findUnique({
        where:{
          prod_id :entity.id
        },
        include:{
          categorias:true,
          tamanhos:{
            select:{
              tamanho:true
            }
          }
        }
      })
      product && (result.data = product)
      result.status = 200
      result.message = "produto recuperado com sucesso"
    }catch {
      result.status = 400;
      result.error = 'deu ruim'
    }
    return result
  }

  public async update(entity: Entity): Promise<Result> {
    return new Result()
  }

}