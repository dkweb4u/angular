import { Component, Input,Output,EventEmitter, OnDestroy, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy  } from '@angular/core';
import { RoomList } from '../roomInterface';

@Component({
  selector: 'hotel-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges , OnDestroy   {

  @Input() roomslist : RoomList[] = []

  @Input() title : string ="";


  @Output() bookfun = new EventEmitter<RoomList>;


  passdata(x : RoomList){

    this.bookfun.emit(x);

  }

  ngOnInit(): void {
    
  }



  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)

    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();

    }

  }

  ngOnDestroy(): void {
    console.log("On Destroy Called")
  }

}
