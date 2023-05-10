import {AbsServiceCrud} from "./abs-service-crud";
import {CarrinhoRepository} from "../persistence/repository/carrinho/carrinho-repository";

export class CarrinhoService extends AbsServiceCrud{
  constructor() {
    super();
    this.repository = new CarrinhoRepository()
    this.strategies = []
  }
}