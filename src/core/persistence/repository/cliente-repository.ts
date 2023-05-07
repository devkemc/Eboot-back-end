import {ClienteEntity} from "../../../domain/entities/pessoa/cliente-entity";
import {PessoaEntity} from "../../../domain/entities/pessoa/pessoa-entity";
import {Result} from "../../../presentation/helpers/result";
import {IRepositoryCrud} from "../../interfaces/i-repository-crud";
import {Conection} from "./conection";
import {HttpUnauthorized} from "../../../presentation/utils/errors/http-unauthorized";

export class ClienteRepository implements IRepositoryCrud {
  constructor() {
  }

  public async create(clienteEntity: ClienteEntity): Promise<Result> {
    const result = new Result();
    try {
      await Conection.getConection().$transaction(async (transaction) => {
          const cliente = await transaction.pessoas.create({
            data: {
              endereco: {
                create: {
                  end_tipo_logradouro: clienteEntity!.endereco!.tipoLogradouro!,
                  end_tipo_imovel: clienteEntity!.endereco!.tipoImovel!,
                  end_tipo_endereco: clienteEntity!.endereco!.tipoEndereco!,
                  end_logradouro: clienteEntity!.endereco!.logradouro!,
                  end_numero: clienteEntity!.endereco!.numero!,
                  end_bairro: clienteEntity!.endereco!.bairro!,
                  end_cep: clienteEntity!.endereco!.cep!,
                  cidade: {
                    create: {
                      cid_nome: clienteEntity!.endereco!.cidade!.nome!,
                      estado: {
                        create: {
                          est_nome: clienteEntity!.endereco!.cidade!.estado!.nome,
                        },
                      },
                    },
                  },
                },
              },
              pes_tipo_fone: clienteEntity!.telefone!.tipo,
              pes_cpf: clienteEntity!.cpf!,
              pes_dataNascimento: clienteEntity.dataNascimento,
              pes_ddd: clienteEntity!.telefone!.ddd,
              pes_genero: clienteEntity!.genero!,
              pes_isActive: clienteEntity!.isActive!,
              pes_nome: clienteEntity!.nome!,
              pes_numero: clienteEntity!.telefone!.numero!,
              pes_sobrenome: clienteEntity!.sobrenome!,
              pes_email: clienteEntity!.usuario!.email,
              pes_senha: clienteEntity!.usuario!.senha,
              pes_admin: false,
              cliente: {
                create: {
                  ranking: clienteEntity.ranking
                }
              }
            },
            include: {
              cliente: true,
            }
          })
          result.data = cliente
          await transaction.carrinhos.create({
            data: {
              icar_valor_total: 0,
              cliente: {
                connect: {
                  pes_id: cliente.pes_id
                }
              }
            }
          })
        }
      )

      result.status = 201;
      result.message = "cliente criado com sucesso";

    } catch
      (err) {
      result.status = 400;
      result.error = "deu erro na criação";
    } finally {
    }

    return result;
  }

  public async getAll(): Promise<Result> {
    const result = new Result();
    try {
      result.data = await Conection.getConection().pessoas.findMany({
        include: {
          cliente: true
        }
      });
      result.status = 200;
      result.message = "clientes recuperados com sucesso";
    } catch {
      result.status = 401;
      result.error = "deu erro";
    } finally {
    }
    return result;
  }

  public async delete(cliente: PessoaEntity): Promise<Result> {
    const result = new Result();
    try {
      const clientes = await Conection.getConection().pessoas.update({
        where: {pes_id: cliente.id},
        data: {
          pes_isActive: false,
        },
      });
      result.data = clientes;
      result.message = "cliente inativado com sucesso";
      result.status = 200;
    } catch {
      result.status = 400;
      result.error = "erro na exclusão";
    } finally {
    }
    return result;
  }

  public async getOne(entity: PessoaEntity):
    Promise<Result> {
    const result = new Result();
    try {
      const cliente = await Conection.getConection().pessoas.findUnique({
        where: {
          pes_id: entity.id,
        },
        include: {
          cliente: true,
        }
      });
      cliente && (result.data = cliente);
      result.message = "cliente recuperado com sucesso";
      result.status = 200;
    } catch
      (e) {
      throw new HttpUnauthorized('deu ruim')
    } finally {

    }
    return result;
  }

  public async update(cliente: ClienteEntity):
    Promise<Result> {
    const result = new Result();
    try {
      const clientes = await Conection.getConection().pessoas.update({
        where: {pes_id: cliente.id},
        data: {
          pes_nome: cliente.nome,
          pes_sobrenome: cliente.sobrenome,
          pes_dataNascimento: cliente.dataNascimento,
          pes_email: cliente!.usuario!.email!,
          pes_senha: cliente!.usuario!.senha!,
          pes_cpf: cliente.cpf,
          pes_genero: cliente.genero,
          pes_isActive: cliente.isActive,
          cliente: {
            update: {
              ranking: cliente.ranking
            }
          }
        },
        include: {
          cliente: true,
        }
      });
      result.data = clientes;
      result.message = "Dados atualizados com sucesso";
      result.status = 200;
    } catch (e) {
      result.status = 400;
      result.error = "erro na atualização do cliente";
    } finally {
    }
    return result;
  }

  public async findUserByEmail(email: string) {
    try {
      const user = await Conection.getConection().pessoas.findUnique({
        where: {
          pes_email: email,
        },
        select: {
          pes_id: true,
          pes_email: true,
          pes_senha: true,
          pes_admin: true
        }
      });
      return user;
    } catch {
      return null;
    } finally {
    }
  }
}
