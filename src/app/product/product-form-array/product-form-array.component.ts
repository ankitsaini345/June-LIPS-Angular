import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  FormControl, FormArray,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-product-form-array',
  templateUrl: './product-form-array.component.html',
  styleUrls: ['./product-form-array.component.css']
})
export class ProductFormArrayComponent implements OnInit {

  productArrayForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productArrayForm = this.fb.group({
      name: ['', Validators.required],
      tnc : ['' , Validators.requiredTrue],
      price: [{ value: '100', disabled: true },
      Validators.required],
      address: this.fb.group({
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        city: [''],
      }),
      sellers: this.fb.array([
        this.buildForm()
      ])
    });

    // this.productArrayForm.disable();
  }

  buildForm() {
    return this.fb.group({
      sellerName: [''],
      email: ['', [Validators.email,
      Validators.required]],
      discount: [''],
      estDeliveryTime: ['']
    });
  }

  addSeller() {
    let sellerControl =
      this.productArrayForm.get('sellers') as FormArray;
    sellerControl.push(this.buildForm());
  }

  removeSeller(i: number) {
    let sellerControl =
      this.productArrayForm.get('sellers') as FormArray;
    sellerControl.removeAt(i);
  }


  saveProduct() {
    console.log(this.productArrayForm.value);
    console.log(this.productArrayForm.getRawValue());

  }
}
