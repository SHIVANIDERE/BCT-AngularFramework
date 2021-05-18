import { Component, OnInit } from '@angular/core';
import { DummyService } from '../services/dummy.service';
import { DummycartService } from '../services/dummycart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[]=[]
  constructor(private service:DummyService,private cartService:DummycartService) {
   }

  ngOnInit(): void {
    this.products = this.service.products;
  }
  addToCart(product){
    this.cartService.cart.push(product)
  }
}
