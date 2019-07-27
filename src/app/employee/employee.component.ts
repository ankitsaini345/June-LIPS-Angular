import { Component, OnInit } from '@angular/core';
import { IEmployee } from './iemployee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  empList: Array<IEmployee>;

  selectedEmployee: IEmployee;

  // empService = new EmployeeService();

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
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
