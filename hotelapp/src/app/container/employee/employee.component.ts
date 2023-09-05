import { Component } from '@angular/core';
import { RoomsService } from 'src/app/rooms/services/rooms.service';

@Component({
  selector: 'hotel-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent {

employename : string ="James";


constructor(private x: RoomsService){
  
}

}
