import { ClienteEntity } from "../../../domain/entities/cliente-entity";
import { PessoaEntity } from "../../../domain/entities/pessoa-entity";
import { Result } from "../../../presentation/helpers/result";
import { IRepositoryCrud } from "../../interfaces/i-repository-crud";

import { cryptoPassword } from "../../utils/cryptoPassword";
import { AbstractRepository } from "./abstract-repository";

export class PessoaRepository extends AbstractRepository implements IRepositoryCrud {
  constructor() {
    super();
  }
  public async create(cliente: ClienteEntity): Promise<Result> {
    const senhaCriptografada = await cryptoPassword(cliente.senha);
    const result = new Result();
    try {
      const create = await this.conection.pessoa.create({
        data: {
          pes_nome: cliente.nome,
          pes_sobrenome: cliente.sobrenome,
          pes_dataNascimento: cliente.dataNascimento,
          pes_cpf: cliente.cpf,
          pes_genero: cliente.genero,
          pes_isActive: cliente.isActive,
          pes_tipo: cliente.tipoPessoa,
          ranking: cliente.ranking,
          usuario: {
            create:{
              user_email: cliente.email,
              user_senha: senhaCriptografada,
              user_admin: false,
            }
          },
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
      result.status = 400;
      result.error = "deu erro na criação";
      console.log(err);
    } finally {
      await this.destroy();
    }

    return result;
  }

  public async getAll(): Promise<Result> {
    const result = new Result();
    try {
      const pessoas = await this.conection.pessoa.findMany({});
      result.data = pessoas;
      result.status = 200;
      result.message = "clientes recuperados com sucesso";
    } catch {
      result.status = 401;
      result.error = "deu erro";
    } finally {
      await this.destroy();
    }
    return result;
  }

  public async delete(cliente: PessoaEntity): Promise<Result> {
    const result = new Result();
    try {
      const clientes = await this.conection.pessoa.update({
        where: { pes_id: cliente.id },
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
      await this.destroy();
    }
    return result;
  }
  public async getOne(entity: PessoaEntity): Promise<Result> {
    const result = new Result();
    try {
      const cliente = await this.conection.pessoa.findUnique({
        where: {
          pes_id: entity.id,
        },
      });
      cliente && (result.data = cliente);
      result.message = "cliente recuperado com sucesso";
      result.status = 200;
    } catch (e) {
      result.status = 400;
      result.error = "erro na consulta do cliente";
      console.log(e);
    } finally {
      await this.destroy();
    }
    return result;
  }
  public async update(cliente: ClienteEntity): Promise<Result> {
    const result = new Result();
    try {
      const clientes = await this.conection.pessoa.update({
        where: { pes_id: cliente.id },
        data: {
          pes_nome: cliente.nome,
          pes_sobrenome: cliente.sobrenome,
          pes_dataNascimento: cliente.dataNascimento,
          usuario: {
            update:{
              user_email: cliente.email,
              user_senha: cliente.senha,
            }
          },
          pes_cpf: cliente.cpf,
          pes_genero: cliente.genero,
          pes_isActive: cliente.isActive,
          ranking: cliente.ranking,
        },
      });
      result.data = clientes;
      result.message = "Dados atualizados com sucesso";
      result.status = 200;
    } catch (e) {
      console.log(e);

      result.status = 400;
      result.error = "erro na atualização do cliente";
    } finally {
      await this.destroy();
    }
    return result;
  }
}
