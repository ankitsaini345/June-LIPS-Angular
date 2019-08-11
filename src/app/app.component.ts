import { Component, DoCheck, OnInit, Inject } from '@angular/core';
import { EmployeeService } from './employee/service/employee.service';
import { IEmployee } from './employee/iemployee';
import { ProductService } from './product/service/product.service';
import { IConfig } from './valueProvider/ivalueprovider';
import { CONFIG_SERVICE } from './valueProvider/valueprovider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>This is</h1>'
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'ecommerceapp';
  role = 'Users';
  productCount = 0;
  empList: IEmployee[] = [];
  constructor(private empService: EmployeeService,
    private productService: ProductService,
    @Inject(CONFIG_SERVICE) private config: IConfig) {
      console.log(config.apiEndPoint, config.pageSize);
     }


  ngOnInit() {
    this.productService.getProduct().
      subscribe(
        (data) => this.productCount = data.length
      );
  }

  ngDoCheck(): void {
    console.log('check event is called');
  }

  addEmployee() {
    const emp = {
      id: 56, name: 'Emp56', email: 'test56@test.com',
      address: 'Pune', dob: new Date('11-Feb-2005'),
      salary: 45678
    };

    this.empList = this.empService.addEmployee(emp);
  }
}
