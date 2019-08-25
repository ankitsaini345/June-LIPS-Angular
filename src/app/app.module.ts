import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { PhotosComponent } from './photos/photos.component';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { CONFIG_SERVICE, CONFIG_VALUE } from './valueProvider/valueprovider.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { APP_MODULES } from './module.config';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    HeaderComponent,
    ContainerComponent,
    MainNavComponent,
    PhotosComponent,
    PageNotFoundComponent
  ],
  imports: [
    ...APP_MODULES
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    },
    {
      provide: CONFIG_SERVICE,
      useValue: CONFIG_VALUE
    }
    // {
    //   provide: EmployeeService,
    //   useClass: NewEmployeeService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
