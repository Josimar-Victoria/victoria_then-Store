import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidator } from '../../../../app/utli/validators'
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private productsService: ProductsService, 
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.buildForm()
  }

  ngOnInit(){
  }
  seveProduct(event: Event){
    event.preventDefault()
    if(this.form.value){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((neWproduct) => {
        console.log(neWproduct);
        this.router.navigate(['./admin/products-list'])
        
      })
      console.log(this.form);
      
    }
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidator.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]]
    });
  }

  get priceField(){
    return this.form.get('price');
  }

}
