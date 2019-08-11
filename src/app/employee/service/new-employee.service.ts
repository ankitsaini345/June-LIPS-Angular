import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class NewEmployeeService extends
  EmployeeService {

  constructor() {
    super();
  }

  getEmployeeList() {
    console.log('called from new service');
    return [
      {
        id: 1, name: 'Emp1', email: 'test1@test.com',
        address: 'Pune', dob: new Date('11-Feb-1987'), salary: 23000
      },
      {
        id: 2, name: 'Emp2', email: 'test2@test.com',
        address: 'Pune', dob: new Date('11-Mar-1987'), salary: 35000
      }];
  }

}
