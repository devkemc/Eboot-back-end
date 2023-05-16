import {AbsServiceCrud} from "../abs-service-crud";
import {CartaoRepository} from "../../persistence/repository/cliente/cartao-repository";

export class CartaoService extends AbsServiceCrud{
  constructor() {
    super();
    this.repository = new CartaoRepository()
    this.strategies = []
  }
}