import {
  Component, OnInit,
  Self, ViewChild, ElementRef
} from '@angular/core';
import { IEmployee } from './iemployee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  // @ViewChild('search', { static: true }) searchBox: ElementRef;
  empList: Array<IEmployee>;

  selectedEmployee: IEmployee;

  // empService = new EmployeeService();

  constructor(@Self() private empService: EmployeeService) { }

  ngOnInit() {
    // if(this.empService) {
    //   this.empList = this.empService.getEmployeeList();

    // }
    // console.log(this.searchBox);
    // this.searchBox.nativeElement.onchange((data) => console.log(data));
    this.empList = this.empService.getEmployeeList();
  }

  receiveEmployee(employee: IEmployee) {
    this.selectedEmployee = employee;
  }

  addEmployee() {
    const emp = {
      id: 5, name: 'Emp5', email: 'test5@test.com',
      address: 'Pune', dob: new Date('11-Feb-2002'),
      salary: 43000
    };

    this.empList = this.empService.addEmployee(emp);
  }

}
