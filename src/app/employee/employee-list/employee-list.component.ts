import {
  Component, OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList: Array<IEmployee>;

  @Output() selectedEmployee = new EventEmitter<IEmployee>();
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, data) {
    return index;
  }

  edit(emp: IEmployee) {
    // console.log(emp);
    this.selectedEmployee.emit(emp);
  }

}
