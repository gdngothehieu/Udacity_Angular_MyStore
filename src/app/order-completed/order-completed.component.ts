import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.css']
})
export class OrderCompletedComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  back() {
    this.cartService.clear();
  }
}
