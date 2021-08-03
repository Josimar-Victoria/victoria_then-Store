import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductsEditsComponent } from './components/products-edits/products-edits.component';

@NgModule({
  declarations: [
    ProductsFormComponent, 
    NavComponent, 
    ProductsTableComponent, 
    ProductsDashboardComponent, 
    ProductsListComponent, FormProductComponent, ProductsEditsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
