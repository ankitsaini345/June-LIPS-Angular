import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormArrayComponent } from './product-form-array.component';

describe('ProductFormArrayComponent', () => {
  let component: ProductFormArrayComponent;
  let fixture: ComponentFixture<ProductFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
