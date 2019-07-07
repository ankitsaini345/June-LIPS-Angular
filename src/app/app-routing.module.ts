import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PostsComponent } from './posts/posts.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
