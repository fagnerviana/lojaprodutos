import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrapesquisa',
  templateUrl: './barrapesquisa.component.html',
  styleUrls: ['./barrapesquisa.component.scss']
})
export class BarrapesquisaComponent implements OnInit{

descricao = "";

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], {queryParams:{descricao: this.descricao}} )
      return;
    }
    this.router.navigate(["produtos"]);
  }

}
