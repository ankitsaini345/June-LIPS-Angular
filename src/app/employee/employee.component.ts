import { Component, OnInit } from '@angular/core';
import { IEmployee } from './iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList: Array<IEmployee>;

  selectedEmployee: IEmployee;

  constructor() { }

  ngOnInit() {
    this.empList = [
      {
        id: 1, name: 'Emp1', email: 'test1@test.com',
        address: 'Pune', dob: new Date('11-Feb-1987'), salary: 23000
      },
      {
        id: 2, name: 'Emp2', email: 'test2@test.com',
        address: 'Pune', dob: new Date('11-Mar-1987'), salary: 35000
      },
      {
        id: 3, name: 'Emp3', email: 'test3@test.com',
        address: 'Pune', dob: new Date('11-Jun-1987'), salary: 45000
      },
      {
        id: 4, name: 'Emp4', email: 'test4@test.com',
        address: 'Pune', dob: new Date('11-Dec-1987'), salary: 120000
      },
    ];
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

    this.empList = [...this.empList, emp];
  }

}
