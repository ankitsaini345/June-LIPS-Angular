import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }

}
