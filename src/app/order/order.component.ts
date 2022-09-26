import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart: Map<number, number> = new Map();
  full_name: string = '';
  address: string = '';
  credit_card: string = '';

  @Output() submitted = new EventEmitter();

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getAll();
  }

  onSubmit() {
    if (!this.credit_card.match(/^[0-9]+$/)) {
      alert('Invalid credit card number!');
      return;
    }
    this.submitted.emit();
    this.router.navigateByUrl('/order_completed');
  }

  isEmpty(): boolean {
    return this.cartService.getTotalPrice() <= 0;
  }
}
