import {IRepositoryCrud} from "../../../interfaces/i-repository-crud";
import {Result} from "../../../../presentation/helpers/result";
import {Entity} from "../../../../domain/interfaces/i-entity";
import {EnderecoEntity} from "../../../../domain/entities/pessoa/endereco-Entity";
import {Conection} from "../conection";
import {HttpBadRequest} from "../../../../presentation/utils/errors/http-bad-request";

export class EnderecoRepository implements IRepositoryCrud {
  public async create(endereco: EnderecoEntity): Promise<Result> {
    const result = new Result()
    console.log(endereco)
    try {
      const createdEndereco =  await Conection.getConection().enderecos.create({
        data: {
          pessoa: {
            connect: {
              pes_id: endereco.pessoa?.id
            }
          },
          end_tipo_logradouro: endereco.tipoLogradouro,
          end_tipo_imovel: endereco.tipoImovel,
          end_tipo_endereco: endereco.tipoEndereco,
          end_logradouro: endereco.logradouro,
          end_numero: endereco.numero,
          end_bairro: endereco.bairro,
          end_cep: endereco.cep,
          cidade: {
            create: {
              cid_nome: endereco.cidade.nome,
              estado: {
                create: {
                  est_nome: endereco.cidade.estado.nome,
                },
              },
            },
          },
        },
        include:{
          cidade:{
            include:{
              estado: true
            }
          }
        },
      })
      result.data = createdEndereco
      result.status = 200
      result.message = 'Endereço adicionado com sucesso'
    } catch (e) {
      console.log(e)
      throw new HttpBadRequest('Erro ao adicionar endereço. Tente novamente');

    }
    return result;
  }

  delete(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

  getAll(): Promise<Result> {
    return Promise.resolve(new Result());
  }

  public async getOne(endereco: EnderecoEntity): Promise<Result> {
    const result = new Result()
    try{
      const end = await Conection.getConection().enderecos.findMany({
        where:{
          end_pes_id: endereco.pessoa!.id!,
          end_tipo_endereco: "ENTREGA"
        },
        include:{
          cidade:{
            include:{
              estado: true
            }
          }
        },
      })
      result.data = end
      result.status = 200
      result.message = "Endereços recuperados com sucesso"

    }catch (e){
      throw new HttpBadRequest('Erro ao localizar endereços de entrega. Tente novamente');
    }

    return result
  }

  update(entity: Entity): Promise<Result> {
    return Promise.resolve(new Result());
  }

}