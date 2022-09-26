import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductItem } from './product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ProductItem[]> {
    // idea from here: https://www.codegrepper.com/code-examples/javascript/angular+load+json+file+with+httpclient
    // it's easy to replace to valid data source
    return this.http.get<[]>('../assets/data.json');
  }
}
