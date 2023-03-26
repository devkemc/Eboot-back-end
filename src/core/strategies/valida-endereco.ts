import { EnderecoEntity } from "../../domain/entities/endereco-Entity";
import { Entity } from "../../domain/interfaces/i-entity";
import { Result } from "../../presentation/helpers/result";
import { IStrategy } from "../interfaces/i-strategy";

export class ValidaEndereco implements IStrategy {
  async processar(entidade: EnderecoEntity): Promise<Result> {
    const result = new Result();
    const isValid =
      !!entidade.tipoLogradouro &&
      !!entidade.tipoEndereco &&
      !!entidade.tipoImovel &&
      !!entidade.logradouro &&
      !!entidade.numero &&
      !!entidade.bairro &&
      !!entidade.cep &&
      !!entidade.cidade;
    if (isValid) return result;

    result.error = "Endereço invalido, está faltando dados!";
    result.status = 400;
    return result;
  }
}
