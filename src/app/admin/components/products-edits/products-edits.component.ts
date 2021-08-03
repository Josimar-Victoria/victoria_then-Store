import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidator } from 'src/app/utli/validators';

@Component({
  selector: 'app-products-edits',
  templateUrl: './products-edits.component.html',
  styleUrls: ['./products-edits.component.scss']
})
export class ProductsEditsComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private productsService: ProductsService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.buildForm()
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product)
      })

    })
  }
  seveProduct(event: Event){
    event.preventDefault()
    if(this.form.value){
      const product = this.form.value;
      this.productsService.updateProduct( this.id,product)
      .subscribe((neWproduct) => {
        console.log(neWproduct);
        this.router.navigate(['./admin/products-list'])
        
      })
      console.log(this.form);
      
    }
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
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
