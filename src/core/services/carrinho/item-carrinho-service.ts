import {AbsServiceCrud} from "../abs-service-crud";
import {ItemCarrinhoRepository} from "../../persistence/repository/carrinho/item-carrinho-repository";
import {ItemCarrinhoEntity} from "../../../domain/entities/carrinho/item-carrinho-entity";
import {ProdutoRepository} from "../../persistence/repository/produto-repository";
import {ItensCarrinho, Produtos} from "@prisma/client";
import {ProdutoEntity} from "../../../domain/entities/produto/produto-entity";
import {Result} from "../../../presentation/helpers/result";

export class ItemCarrinhoService extends AbsServiceCrud {
  constructor() {
    super();
    this.strategies = []
    this.repository = new ItemCarrinhoRepository()
  }

  public async update(itemCarrinho: ItemCarrinhoEntity) {
    console.log(itemCarrinho)
    const rep = new ItemCarrinhoRepository()
    const item = await rep.getItemCarrinho(itemCarrinho)
    const produto = new ProdutoEntity({id: item!.icr_prd_id})
    itemCarrinho.valorTotal = await this.calcularValorTotal( produto, itemCarrinho.quantidade!)
    return super.update(itemCarrinho);
  }

  public async create(itemCarrinho: ItemCarrinhoEntity) {

    itemCarrinho.valorTotal = await this.calcularValorTotal(itemCarrinho.produto!, itemCarrinho.quantidade!)
    return super.create(itemCarrinho);
  }

  public async calcularValorTotal(produtoEntity: ProdutoEntity, quantidade: number) {
    const produtoRepository = new ProdutoRepository()
    const produto = (await produtoRepository.getOne(produtoEntity)).data as Produtos
    return Number(produto.prd_preco) * quantidade
  }
}