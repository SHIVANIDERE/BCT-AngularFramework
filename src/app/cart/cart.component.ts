import { Component, OnInit } from '@angular/core';
import { DummycartService } from '../services/dummycart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = []
  constructor(private cartService:DummycartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cart;
  }

}
