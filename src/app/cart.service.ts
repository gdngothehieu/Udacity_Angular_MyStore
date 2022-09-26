import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { ProductItem } from './product-item';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private contents: Map<number, number> = new Map();
  private products: ProductItem[] = [];
  private totalPrice: number = 0;

  constructor(private productService: ProductService, private messageService: MessageService) {
    this.productService.getAll().subscribe(data => {
      this.log(`Got products!`);
      this.products = data;
    });
  }

  getAll(): Map<number, number> {
    return this.contents;
  }

  add(id: number, quantity: number): void {
    const c = this.contents.get(id);
    this.contents.set(id, (c ?? 0) + quantity);
    this.recalcTotalPrice();
    this.log(`Add product to cart, id: ${id}, total quantity: ${this.contents.get(id)}`);
  }

  edit(id: number, quantity: number): void {
    this.contents.set(id, quantity);
    this.recalcTotalPrice();
    this.log(`Edit cart, id: ${id}, total quantity: ${this.contents.get(id)}`);
  }

  remove(id: number): void {
    this.contents.delete(id);
    this.recalcTotalPrice();
    this.log(`Remove from cart, id: ${id}`);
  }

  clear(): void {
    this.totalPrice = 0;
    this.contents.clear();
    this.log(`Clear cart`);
  }

  private recalcTotalPrice() {
    this.totalPrice = 0;
    this.contents.forEach((value, id) => {
      const p = this.getProduct(id);
      this.log(`id: ${id}, value: ${value}, price: ${p.price}`);
      this.totalPrice += p.price * value;
    });
  }

  getProduct(id: number): ProductItem {
    const p = this.products.find(e => e.id === id);
    if (p)
      return p;
    this.log(`Invalid product!`);
    return { id: 0, name: '', price: 0, description: '', url: '' };
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  private log(message: string) {
    this.messageService.add(`CartService: ${message}`);
  }
}
