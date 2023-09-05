import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hotelHover]'
})
export class HoverDirective implements OnInit {

  @Input() bg: string = 'blue';


  // bg : string = 'red';

  constructor(private element : ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit(): void {
  // console.log(this.element.nativeElement)

  // this.element.nativeElement.style.background = this.bg;

  this.renderer.setStyle(this.element.nativeElement,'background', this.bg)

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.background = 'green';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.background = 'white';
  }


}
