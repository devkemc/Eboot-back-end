import {AbsServiceCrud} from "./abs-service-crud";
import {ProdutoRepository} from "../persistence/repository/produto-repository";

export class ProdutoService extends AbsServiceCrud{
  constructor() {
    super()
    this.repository = new ProdutoRepository()
    this.strategies = []
  }

}