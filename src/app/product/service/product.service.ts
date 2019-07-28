import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
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


  getProductInfo() {
    const productInfo = {
      name: 'One Plus 6T',
      tnc : true,
      price: 50000,
      address: {
        addressLine1: 'Pune',
        addressLine2: 'Pune',
        city: 'Pune'
      },
      sellers: [
        {
          sellerName: 'Amazon',
          email: 'amazon@test.com',
          discount: .2,
          estDeliveryTime: '3 days'
        }
      ]
    };

    return of(productInfo);
  }
}
