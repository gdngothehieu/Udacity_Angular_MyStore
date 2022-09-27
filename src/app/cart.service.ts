import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { ProductItem } from "./product-item";
import { ProductService } from "./product.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private contents: Map<number, number> = new Map();
  private products: ProductItem[] = [];
  private totalPrice: number = 0;

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {
    this.productService.getAll().subscribe((data) => {
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
  }

  edit(id: number, quantity: number): void {
    this.contents.set(id, quantity);
    this.recalcTotalPrice();
  }

  remove(id: number): void {
    this.contents.delete(id);
    this.recalcTotalPrice();
  }

  clear(): void {
    this.totalPrice = 0;
    this.contents.clear();
  }

  private recalcTotalPrice() {
    this.totalPrice = 0;
    this.contents.forEach((value, id) => {
      const p = this.getProduct(id);
      this.totalPrice += p.price * value;
    });
  }

  getProduct(id: number): ProductItem {
    const p = this.products.find((e) => e.id === id);
    if (p) return p;
    return { id: 0, name: "", price: 0, description: "", url: "" };
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  private log(message: string) {
    this.messageService.add(`CartService: ${message}`);
  }
}
