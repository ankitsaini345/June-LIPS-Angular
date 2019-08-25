import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsModule } from './posts/posts.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';

export const APP_MODULES = [
  BrowserModule,
  HttpClientModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  PostsModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  ProductModule,
  AppRoutingModule
];
