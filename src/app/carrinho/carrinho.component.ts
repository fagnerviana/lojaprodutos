import { Component, OnInit } from '@angular/core';
import { _Constructor } from '@angular/material/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho [] =[];
  total=0;

  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }
  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho=this.itensCarrinho.filter(item=> item.id!==produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
  }
  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev,curr) =>prev+(curr.preco * curr.quantidade),0)
    this.calcularTotal();
  }
  comprar(){
    alert("Parabens, você finalizou sua compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);

  }

}
