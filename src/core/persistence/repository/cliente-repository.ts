import { ClienteEntity } from "../../../domain/entities/cliente-entity";
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
        },
      });

      result.status = 201;
      result.message = "cliente criado com sucesso";
      result.data = create;
    } catch (err) {
      console.log(err);

      result.status = 400;
      result.error = "deu errado" + err;
    }

    return result;
  }

  public async getAll(): Promise<Result> {
    const result = new Result();
    try {
      const clientes = await this.conection.cliente.findMany();
      result.data = clientes;
      result.status = 200;
      result.message = "clientes recuperados com sucesso";
    } catch {
      result.status = 401;
      result.message = "deu erro";
    }
    return result;
  }
}
