import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hotel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  title: string = "Its Working"

  content: number = 500

@ViewChild(TopbarComponent,{static: true}) topbar !: TopbarComponent;



constructor(private configServices: ConfigService){

 
}



ngOnInit(): void {
  // console.log(this.roomcom)
  // console.log(this.topbar)
}

ngAfterViewChecked(): void {
 
// console.log(this.topbar);


  
  
}

}
