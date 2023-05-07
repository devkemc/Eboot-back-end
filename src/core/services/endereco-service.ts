import {AbsServiceCrud} from "./abs-service-crud";
import {EnderecoRepository} from "../persistence/repository/endereco-repository";

export class EnderecoService extends AbsServiceCrud {
  constructor() {
    super();
    this.strategies = []
    this.repository = new EnderecoRepository()
  }
}