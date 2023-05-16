import {IRepositoryCrud} from "../../../interfaces/i-repository-crud";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {Result} from "../../../../presentation/helpers/result";
import {Conection} from "../conection";
import {CartaoEntity} from "../../../../domain/entities/pagamento/cartao/cartao-entity";

export class CartaoRepository implements IRepositoryCrud {
  public async create(card: CartaoEntity): Promise<Result> {
    const result = new Result();
    try{
      const createdCard = await Conection.getConection().cartoes.create({
        data:{
          crt_nome_impresso: card.nomeImpresso,
          crt_numero_cartao: card.numero,
          crt_cod_seguranca: card.codSeguranca,
          crt_bandeira: card.bandeiraCartao,
          crt_data_validade: card.dataValidade,
          cliente_id: card.cliente.id
        }
      })
    }catch (e){

    }
    return Promise.resolve(new Result());
  }

  delete(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getAll(): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getOne(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  update(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

}