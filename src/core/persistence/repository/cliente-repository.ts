import { ClienteEntity } from "../../../domain/entities/cliente-entity";
import { Entity } from "../../../domain/interfaces/i-entity";
import { Result } from "../../../presentation/helpers/result";
import { AbstractRepository } from "./abstract-repository";

export class ClienteRepository extends AbstractRepository {
  constructor() {
    super();
  }
  public async create(cliente: ClienteEntity): Promise<Result> {
    const result = new Result();
    try {
      const create = await this.conection.cliente.create({
        data: {
          cli_nome: cliente.nome,
          cli_sobrenome: cliente.sobrenome,
          cli_dataNascimento: cliente.dataNascimento,
          cli_email: cliente.email,
          cli_cpf: cliente.cpf,
          cli_genero: cliente.genero,
          cli_isActive: cliente.isActive,
          cli_ranking: cliente.ranking,
          cli_senha: cliente.senha,
          telefone: {
            create: {
              tel_tipo: cliente.telefone.tipo,
              tel_ddd: cliente.telefone.ddd,
              tel_numero: cliente.telefone.numero,
            },
          },
          endereco: {
            create: {
              end_tipo_logradouro: cliente.endereco.tipoLogradouro,
              end_tipo_imovel: cliente.endereco.tipoImovel,
              end_tipo_endereco: cliente.endereco.tipoEndereco,
              end_logradouro: cliente.endereco.logradouro,
              end_numero: cliente.endereco.numero,
              end_bairro: cliente.endereco.bairro,
              end_cep: cliente.endereco.cep,
              cidade: {
                create: {
                  cid_nome: cliente.endereco.cidade.nome,
                  estado: {
                    create: {
                      est_nome: cliente.endereco.cidade.estado.nome,
                    },
                  },
                },
              },
            },
          },
        },
      });

      result.status = 201;
      result.message = "cliente criado com sucesso";
      result.data = create;
    } catch (err) {
      console.log(err);

      result.status = 400;
      result.error = "deu erro na criação";
    }

    return result;
  }

  public async getAll(): Promise<Result> {
    const result = new Result();
    try {
      const clientes = await this.conection.cliente.findMany({
        where: { cli_isActive: true },
      });
      result.data = clientes;
      result.status = 200;
      result.message = "clientes recuperados com sucesso";
    } catch {
      result.status = 401;
      result.error = "deu erro";
    }
    return result;
  }

  public async delete(cliente: ClienteEntity): Promise<Result> {
    const result = new Result();
    try {
      const clientes = await this.conection.cliente.update({
        where: { cli_id: cliente.id },
        data: {
          cli_isActive: false,
        },
      });
      result.data = clientes;
      result.message = "cliente inativado com sucesso";
      result.status = 200;
    } catch {
      result.status = 400;
      result.error = "deu erro na exclusão";
    }
    return result;
  }
  public async getOne(entity: ClienteEntity): Promise<Result> {
    const result = new Result();
    try {
      const cliente = await this.conection.cliente.findUnique({
        where: {
          cli_id: entity.id,
        },
      });
      cliente && (result.data = cliente);
      result.message = "cliente recuperado com sucesso";
      result.status = 200;
    } catch {
      result.status = 400;
      result.error = "deu erro na consulta do cliente";
    }
    return result;
  }
}
