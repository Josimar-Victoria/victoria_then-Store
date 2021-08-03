import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service'; 
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  
  Product = []

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(){
    this.fetchProduct()
  }

  fetchProduct(){
    this.productsService.getAllProducts()
    .subscribe(product => {
      this.Product = product
    })
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProduct();
      console.log(rta);
      
    });
  }

}
