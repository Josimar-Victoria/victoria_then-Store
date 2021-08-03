import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { ProductsEditsComponent } from './components/products-edits/products-edits.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductsFormComponent
      },
      {
        path: 'dashboar',
        component: ProductsDashboardComponent
      },
      {
        path: 'table',
        component: ProductsTableComponent,
      }, 
      {
      path: 'products-list',
      component: ProductsListComponent,
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductsEditsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
