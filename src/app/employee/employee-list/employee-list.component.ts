import {
  Component, OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit, OnChanges {
  @Input() employeeList: Array<IEmployee>;
  @Input() title: string;
  @Output() selectedEmployee = new EventEmitter<IEmployee>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

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
