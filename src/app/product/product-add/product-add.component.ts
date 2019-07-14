import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  searchBox: FormControl;
  constructor() {
    this.searchBox = new FormControl('test');
  }

  ngOnInit() {
    this.searchBox.valueChanges.subscribe(
      (data) => console.log(data)
    );
  }

  reset() {
    // this.searchBox.setValue('New Value');
    this.searchBox.reset();
  }
  enable() {
    this.searchBox.enable();
  }
  disable() {
    this.searchBox.disable();
  }
}
