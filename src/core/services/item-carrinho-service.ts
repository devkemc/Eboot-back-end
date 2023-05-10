import {AbsServiceCrud} from "./abs-service-crud";
import {ItemCarrinhoRepository} from "../persistence/repository/item-carrinho-repository";
import {ItemCarrinhoEntity} from "../../domain/entities/carrinho/item-carrinho-entity";
import {ProdutoRepository} from "../persistence/repository/produto-repository";
import {Produtos} from "@prisma/client";
import {ProdutoEntity} from "../../domain/entities/produto/produto-entity";

export class ItemCarrinhoService extends AbsServiceCrud {
  constructor() {
    super();
    this.strategies = []
    this.repository = new ItemCarrinhoRepository()
  }

  public async create(itemCarrinho: ItemCarrinhoEntity) {

    itemCarrinho.valorTotal = await this.calcularValorTotal(itemCarrinho.produto!, itemCarrinho.quantidade!)
    return super.create(itemCarrinho);
  }

  public async calcularValorTotal(produtoEntity: ProdutoEntity, quantidade: number) {
    const produtoRepository = new ProdutoRepository()
    const produto = (await produtoRepository.getOne(produtoEntity)).data as Produtos
    return Number(produto.prod_preco) * quantidade
  }
}