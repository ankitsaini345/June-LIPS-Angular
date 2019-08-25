import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { ProductFormArrayComponent } from './product-form-array/product-form-array.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/add/form', component: ProductFormComponent },
  { path: 'product/add/group', component: ProductGroupComponent },
  { path: 'product/add/array', component: ProductFormArrayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
