import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'hotel-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  arraynum: number[]  = [5,2,1,4,5]

  removers(){
   const duplicate :any  = [];
   const org =[];
  const  total = [];

for(let i =0; i< this.arraynum.length; i++){

  let cout = 0;

  for(let j =0; j< this.arraynum.length; j++){
    
    if(this.arraynum[i] == this.arraynum[j]){
      cout = cout +1;
    }    
    
  }

  total.push(cout);

}

for(let i =0; i< this.arraynum.length; i++){
    if(total[i] < 2){
      org.push(this.arraynum[i])
    }

    else{
      if(duplicate.includes(this.arraynum[i])){
         
      }

      else{
        duplicate.push(this.arraynum[i])
      }

    }
}

 console.log(total)

 console.log(org)

 console.log(duplicate)


  }

  id !: number;

  test!: string;

  // id$ = this.route.params.pipe( map(params => params['product_id']) )


  id$ = this.route.paramMap.pipe( map((params) => params.get('product_id')) )


  constructor(private route: ActivatedRoute, private configService: ConfigService){

    // route.params.subscribe((data)=>{
    
    //   this.id = data['product_id'];

    // });

    // this.id = route.snapshot.params['product_id']

    

  }

 
  ngOnInit(): void {

  }

}
