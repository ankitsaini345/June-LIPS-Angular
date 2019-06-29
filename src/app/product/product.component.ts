import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProduct } from './iproduct';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild(HeaderComponent, { static: true }) headerComponent: HeaderComponent;
  @ViewChild('title', { static: true }) div: ElementRef;

  productName: string = 'Lenovo G40-45';
  isHidden = false;
  product: IProduct = {
    name: 'Windows Surface',
    margin: .10,
    price: 65000,
    mfd: new Date('13-Feb-2018')
  };
  constructor() { }

  ngOnInit() {
    this.headerComponent.title = ` Product Name: ${this.productName}`;
  }

  toggle() {
    this.div.nativeElement.innerText = 'New Product';
    this.isHidden = !this.isHidden;
  }

}
