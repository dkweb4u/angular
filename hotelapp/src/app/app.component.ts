import { Component, ViewChild, OnInit, AfterViewInit , ViewContainerRef, ElementRef,Inject} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationSkipped, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotelapp';

  role = 'admin'



  @ViewChild('dash',{read: ViewContainerRef}) vrc !: ViewContainerRef




ngAfterViewInit(): void {
  // const componetref = this.vrc.createComponent(RoomsComponent)
// 
  // componetref.instance.rooms.avl_rooms =1000;

}

// ==================================================================================

@ViewChild('simple', {static: true}) tag !: ElementRef 



ngOnInit(): void {
  // this.tag.nativeElement.innerHTML = "<pre>{Hello dkd}</pre>";
  // this.router.events.subscribe((event)=>{
  //   console.log(event)
  // })

  this.router.events.pipe(   
    filter((event)=> event instanceof NavigationStart)
  ).subscribe((event)=>{
    console.log("Navigation Start")

  })

  this.router.events.pipe(   
    filter((event)=> event instanceof NavigationEnd)
  ).subscribe((event)=>{
    console.log("Navigation End")

  })

}

constructor( private config: ConfigService, private router: Router){
  // localStorage.setItem("dkd","1000");
}


}
