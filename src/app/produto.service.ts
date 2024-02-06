import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: IProduto[] = produtos;

  constructor() { }
  
getAll(){
  return this.produtos;
}

getOne(produtoId:number){
  //aquio a logica para retornar o item ao clicar 
  return this.produtos.find(produto => produto.id == produtoId);
}

}
