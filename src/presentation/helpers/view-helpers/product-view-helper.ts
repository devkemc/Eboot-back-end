import {Request} from "express";
import {CidadeEntity} from "../../../domain/entities/cidade-entity";
import {EnderecoEntity} from "../../../domain/entities/endereco-Entity";
import {EstadoEntity} from "../../../domain/entities/estado-entity";
import {Entity} from "../../../domain/interfaces/i-entity";
import {AbstractViewHelper} from "./abstract-view-helper";
import {Produtos} from "@prisma/client";
import {ProdutoEntity} from "../../../domain/entities/produto-entity";

interface ProductWithCategory extends Produtos {
  categorias: {
    cat_id: number,
    cat_nome: string
  }
}

export class ProductsViewHelper extends AbstractViewHelper {
  constructor(req: Request) {
    const {id, nome, categoria, preco, status, foto3, foto2, foto1, descricao, quantidadeTotal} = req.body
    super(new ProdutoEntity({id, nome, categoria, preco, status, foto3, foto2, foto1, descricao, quantidadeTotal}))
  }

  public setView(entity: Entity): Entity {
    if (!Array.isArray(entity)) {
      const produto = entity as Produtos
      return {
        id: produto.prod_id,
        nome: produto.prod_nome,
        descricao: produto.prod_descricao,
        url_ft1: produto.prod_url_foto1,
        url_ft2: produto.prod_url_foto2,
        url_ft3: produto.prod_url_foto3,
        preco: produto.prod_preco
      }
    }
    return (entity as ProductWithCategory[]).map((produto) => ({
      id: produto.prod_id,
      nome: produto.prod_nome,
      categoria: produto.categorias.cat_nome,
      url_ft1: produto.prod_url_foto1,
      preco: produto.prod_preco
    }))

  }
}
