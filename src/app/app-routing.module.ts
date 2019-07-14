import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PostsComponent } from './posts/posts.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductGroupComponent } from './product/product-group/product-group.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/add/form', component: ProductFormComponent },
  { path: 'product/add/group', component: ProductGroupComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
