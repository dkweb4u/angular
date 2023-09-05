import { AfterViewInit, OnDestroy, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild,AfterViewChecked , ViewChildren,QueryList} from '@angular/core';
import { Romes, RoomList } from './roomInterface';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],

})
export class RoomsComponent implements OnInit ,  OnChanges, AfterViewInit, AfterViewChecked{

hidden = true;

btn_text = "open";

title = "Room List"

toogle(){
  this.hidden = !this.hidden;
  this.hidden ? this.btn_text = "open" : this.btn_text = "close";
  this.title = "Rooms List"
}

// ===============================================================================

rooms : Romes = {
  total_rooms : 20,
  not_avl_rooms : 15,
  avl_rooms : 5
}
  
// ==================================================================================

roomdata : RoomList[] = []



// ======================================================================================================


ngOnInit(): void {


}

// =================================================================================================================================
constructor(private x : RoomsService){
  // this.roomdata = this.x.getRooms()
  this.x.getRooms().subscribe(rooms =>{

    this.roomdata = rooms;
  
    
  })
}

// ================================================================================================================================

data !: RoomList;

gettingdata(x : RoomList){
this.data = x;
}

// ==============================================================================================


adddata(){
  const data : RoomList = {
    category : 'Basic',
    description: '1bhk',
    price : 2000,
    image : [
      'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80',
      'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    ],
    title: "Extra Products",
    rating: {rate: 4.2, count: 200}

  }

  // this.roomdata.push(data);

  this.roomdata = [...this.roomdata, data]

}


// ======================================================================================================================================


ngOnChanges(changes: SimpleChanges): void {
  // console.log(changes)
}

// =================================================================================================

// ngDoCheck(): void {
//   console.log("do check")
// }

// ==========================================================================================================

@ViewChild(HeaderComponent, {static: true}) header !: HeaderComponent; 

ngAfterViewInit(): void {
// console.log(this.header)
// this.header.title = "Magical Moment"
}

ngAfterViewChecked(): void {

  // this.header.title = "Magical Moment"

  // this.headers.last.title ="Last Title"
}

// ================================================================

@ViewChildren(HeaderComponent) headers !: QueryList<HeaderComponent>

// ==========================================================================



}
