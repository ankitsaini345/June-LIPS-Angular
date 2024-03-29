import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PostsComponent } from './posts/posts.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductGroupComponent } from './product/product-group/product-group.component';
import { ProductFormArrayComponent } from './product/product-form-array/product-form-array.component';
import { PhotosComponent } from './photos/photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'photos', component: PhotosComponent },
  {
    path: '', redirectTo: 'employee',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
