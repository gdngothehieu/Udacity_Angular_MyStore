import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MessageService } from '../message.service';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: ProductItem = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: ''
  };

  selectInput: number = 1;

  constructor(private cartService: CartService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.log(`select product: ${this.product?.name}`);
  }

  addToCart() {
    this.log(`Add to cart ${this.selectInput} ${this.product?.name}`);
    this.cartService.add(this.product.id, this.selectInput);
    alert(`${this.selectInput} ${this.product.name} added to cart!`)
  }

  private log(message: string) {
    this.messageService.add(`ProductItemComponent: ${message}`);
  }
}
