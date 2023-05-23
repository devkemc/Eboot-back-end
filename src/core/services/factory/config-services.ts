import {Endpoint} from "../../../presentation/routes/endpoint";
import {CarrinhoService} from "../carrinho/carrinho-service";
import {ProdutoService} from "../produto-service";
import {EnderecoService} from "../cliente/endereco-service";
import {CartaoService} from "../formas-pagamento/cartao-service";
import {ClienteService} from "../cliente/cliente-service";
import {AbsServiceCrud} from "../abs-service-crud";
import {ItemCarrinhoService} from "../carrinho/item-carrinho-service";


export const servicesMap: Record<string, new () => AbsServiceCrud > ={
 [Endpoint.CARRINHO]: CarrinhoService,
  [Endpoint.ITEM_CARRINHO]: ItemCarrinhoService,
  [Endpoint.PRODUTOS]: ProdutoService,
  [Endpoint.ENDERECOS]: EnderecoService,
  [Endpoint.CARTOES]: CartaoService,
  [Endpoint.CLIENTES]: ClienteService
}