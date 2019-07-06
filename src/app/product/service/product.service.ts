import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: IProduct[] = [];

  subject: Subject<IProduct[]> =
    new Subject<IProduct[]>();

  constructor() { }

  addProduct() {
    this.productList.push({
      name: 'product1',
      mfd: new Date('13-Feb-2018'),
      margin: 0.9,
      price: 10000
    });

    this.subject.next(this.productList);
  }

  getProduct() {
    return this.subject.asObservable();
  }
}
