import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductItem } from '../product-item';
import { MessageService } from '../message.service';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: ProductItem = {
    id: 0,
    name: '',
    description: '',
    url: '',
    price: 0
  };
  selectInput: number = 1;

  constructor(private route: ActivatedRoute, private location: Location, private cartService: CartService, private productService: ProductService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as unknown as string);

    this.productService.getAll().subscribe(data => {
      const p = data.find(e => e.id === id);
      if (p) {
        this.product = p;
      }
    });
  }

  addToCart() {
    this.log(`Add to cart ${this.selectInput} ${this.product?.name}`);
    this.cartService.add(this.product.id, this.selectInput);
    alert(`${this.selectInput} ${this.product.name} added to cart!`)
  }

  goBack(): void {
    this.location.back();
    this.log(`back`);
  }

  private log(message: string) {
    this.messageService.add(`ProductItemDetailComponent: ${message}`);
  }
}
