import { Component, OnInit } from '@angular/core';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faHouseChimneyWindow,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from '../carrinho.service';
import { BarrapesquisaComponent } from '../barrapesquisa/barrapesquisa.component';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
  
})
export class HeadComponent implements OnInit {
  faCoffee = faCoffee;
  faHouseChimneyWindow=faHouseChimneyWindow;
  faAddressBook=faAddressBook

  constructor (
    public carrinhoService: CarrinhoService
  ){  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
