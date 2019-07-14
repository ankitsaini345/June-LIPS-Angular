import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productName: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productName = this.fb.control('');
  }

}
