import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<IProduct> = [
    {
      name: 'Windows Surface',
      margin: .10,
      price: 65000,
      mfd: new Date('13-Feb-2018')
    },
    {
      name: 'Mac OS',
      margin: .20,
      price: 45000,
      mfd: new Date('13-Mar-2018')
    },
    {
      name: 'Lenovo',
      margin: .10,
      price: 35000,
      mfd: new Date('13-Nov-2018')
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
