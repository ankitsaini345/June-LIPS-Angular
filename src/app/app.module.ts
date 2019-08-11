import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { PostsModule } from './posts/posts.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductGroupComponent } from './product/product-group/product-group.component';
import { ProductFormArrayComponent } from './product/product-form-array/product-form-array.component';
import { PhotosComponent } from './photos/photos.component';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { NewEmployeeService } from './employee/service/new-employee.service';
import { EmployeeService } from './employee/service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    HeaderComponent,
    ContainerComponent,
    MainNavComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductGroupComponent,
    ProductFormArrayComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PostsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    }
    // {
    //   provide: EmployeeService,
    //   useClass: NewEmployeeService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
