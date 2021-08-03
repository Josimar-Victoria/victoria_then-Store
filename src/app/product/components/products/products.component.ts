import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service'; 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProduct()
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProduct(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
      
    })
  }
}
