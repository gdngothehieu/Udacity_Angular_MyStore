import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../message.service";
import { ProductItem } from "../../product-item";
import { ProductService } from "../../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: ProductItem[] = [];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: any) => {
      this.products = data;
      this.messageService.add(`ProductList ComponentHave Products`);
    });
  }
}
