import {
  Component, OnInit,
  ViewChild, ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';
import { IProduct } from './iproduct';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {


  @ViewChild(HeaderComponent, { static: true }) headerComponent: HeaderComponent;
  @ViewChild('title', { static: true }) div: ElementRef;
  @ViewChildren(HeaderComponent)
  headerChildrenComponent: QueryList<HeaderComponent>;

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
    // this.headerComponent.title = ` Product Name: ${this.productName}`;
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    // this.headerChildrenComponent.changes.subscribe(
    //   (data) => console.log(data)
    // );
    console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.forEach(
      (headerComp: HeaderComponent) => {
        headerComp.title = 'New Product';
      }
    );
    // this.headerComponent.title = `Product Name: ${this.productName}`;
  }

  toggle() {
    this.div.nativeElement.innerText = 'New Product';
    this.isHidden = !this.isHidden;
  }

}
