import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotel-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],

})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;

ngAfterContentInit(): void {
this.employee.employename = "hello world"
}

// ==================================================================================================================



}
