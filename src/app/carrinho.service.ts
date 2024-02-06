import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens:IProdutoCarrinho[]=[];

  constructor() { }

  obterCarrinho(){
    this.itens= JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;

  }
  adicionarAoCarrinho(produto:IProdutoCarrinho){
    this.itens.push(produto);
    //local onde ficara salvo as informações do carrinho 
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  limparCarrinho(){
    this.itens=[];
    localStorage.clear();
  }

  removerProdutoCarrinho(produto:number){
    //vai percorrer a o carrinho e 
    this.itens= this.itens.filter(item => item.id!==produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens));

  }

}
