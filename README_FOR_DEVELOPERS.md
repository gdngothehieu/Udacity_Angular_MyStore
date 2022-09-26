# MyStore development progress

## Create Angular application
ng new <app name>
    e.g.: MyStoreAngular

## Install dependencies
cd your app folder
npm install

## Implement product list
ng generate component product_list
ng generate component product_item
ng generate component product_item_detail

## Implement services
ng generate service cart
ng generate service product
#### import http module
import { HttpClientModule } from '@angular/common/http'
