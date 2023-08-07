import {IRepositoryCrud} from "../../../interfaces/i-repository-crud";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {Result} from "../../../../presentation/helpers/result";
import {Conection} from "../conection";
import {CartaoEntity} from "../../../../domain/entities/pagamento/cartao/cartao-entity";
import {HttpNotFound} from "../../../../presentation/utils/errors/http-not-found";

export class CartaoRepository implements IRepositoryCrud {
  public async create(card: CartaoEntity): Promise<Result> {
    console.log(card)
    const result = new Result();
    try{
      const createdCard = await Conection.getConection().cartoes.create({
        data:{
          crt_nome_impresso: card.nomeImpresso!,
          crt_numero_cartao: card.numero!,
          crt_cod_seguranca: card.codSeguranca!,
          crt_bandeira: card.bandeiraCartao!,
          crt_data_validade: card.dataValidade!,
          crt_cli_id: card.cliente!.id!
        }
      })
      result.data = createdCard
      result.status = 200
      result.message ='Cartão adicionado com sucesso!'
    }catch (e){
      console.log(e)
      throw new HttpNotFound('Erro ao cadastrar cartão')
    }
    return result;
  }

  delete(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getAll(): Promise<Result> {
    return Promise.resolve(new Result());
  }

  public async getOne(entity: CartaoEntity): Promise<Result> {
    const result = new Result()
    try{
      const cartoes = await Conection.getConection().cartoes.findMany({
        where:{
          crt_cli_id : entity.cliente?.id
        }
      })
      result.status = 200
      result.message ='Cartões recuperados com sucesso'
      cartoes && (result.data = cartoes)
    }
    catch (e){
      throw  new HttpNotFound('Erro ao recuperar cartões')
    }

    return result
  }

  update(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

}