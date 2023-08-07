import {Request} from "express";
import {Entity} from "../../../domain/interfaces/i-entity";
import {AbstractViewHelper} from "./abstract-view-helper";
import {Produtos} from "@prisma/client";
import {ProdutoEntity} from "../../../domain/entities/produto/produto-entity";

interface ProductWithCategory extends Produtos {
  categorias: {
    cat_id: number,
    cat_nome: string
  },
  tamanhos:[]
}

export class ProductsViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {id, nome, categoria, preco, status, foto3, foto2, foto1, descricao, quantidadeTotal} = req.body
    super(new ProdutoEntity({id:req.query.id ? Number(req.query.id) : id, nome, categoria, preco, status, foto3, foto2, foto1, descricao, quantidadeTotal}))
  }

  public setView(entity: Entity): Entity {
    if (!Array.isArray(entity)) {
      const produto = entity as ProductWithCategory
      return {
        id: produto.prd_id,
        nome: produto.prd_nome,
        descricao: produto.prd_descricao,
        url_ft1: produto.prd_url_foto1,
        url_ft2: produto.prd_url_foto2,
        url_ft3: produto.prd_url_foto3,
        preco: produto.prd_preco,
        tamanhos:produto.tamanhos
      }
    }
    return (entity as ProductWithCategory[]).map((produto) => ({
      id: produto.prd_id,
      nome: produto.prd_nome,
      categoria: produto.categorias.cat_nome,
      url_ft1: produto.prd_url_foto1,
      preco: produto.prd_preco
    }))

  }
}
