import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hotel-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm !: FormGroup;


  constructor(private configService: ConfigService, private fb: FormBuilder, private actrouter: ActivatedRoute){
    
  }

ngOnInit(): void {
  this.bookingForm = this.fb.group(
    {
      rooId: new FormControl({value:'2', disabled: true},{ validators: [Validators.required]}),
      gusteEmail: ['',[Validators.required, Validators.email]],
      CheckInDate: [''],
      CheckOutDate: [''],
      bookingstatus: [''],
      amount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guessName: [''],

      address: this.fb.group(
        {
          address1: [''],
          city: [''],
          pincode: ['']
        }
      ),

      guests: this.fb.array([
        this.fb.group({guestName: [''], age: new FormControl('')  }),
      ]),

    });

    // -----------------------------------------------

    this.setvaluefun();

    this.bookingForm.valueChanges.subscribe((data)=>{
      console.log(data)
    })



   


}

addBooking(){
  console.log(this.bookingForm.value)                // not get diable value
  console.log(this.bookingForm.getRawValue())       // get disable value also

}



// ---------------------------------------------------------------------

get guests(){
  return this.bookingForm.get('guests') as FormArray;
}


addgust(){
  this.guests.push(
    this.fb.group({guestName: [''], age: new FormControl('') })
  )
}

// ------------------------------- add control   ------------------------------------------------------

addPassport(){
this.bookingForm.addControl('passport', new FormControl(''))
}


//------------------------------------ Remove Control -------------------------------------------------

removePassport(){
  this.bookingForm.removeControl('passport')
  }

// ------------------------------------------------------------------------------------------------------

deleteguste(i: number){
  this.guests.removeAt(i);
}

// ----------------------------------------------------------------------------------------------------------

formreset(){
  this.bookingForm.reset(
    {
      rooId: '10',
      gusteEmail: '',
      CheckInDate: '',
      CheckOutDate: '',
      bookingstatus: '',
      amount: '',
      bookingDate: '',
      mobileNumber: '',
      guessName: '',

      address: 
        {
          address1: '',
          city: '',
          pincode: ''
        }
      ,

      guests: [],

    }
  );

}

// ----------------------------------------------------------------------------------------------

setvaluefun(){
  this.bookingForm.patchValue(
    {
      rooId:  this.actrouter.snapshot.paramMap.get('product_id'),
      gusteEmail: 'dk150198@gmail.com',
      CheckInDate: new Date('15-Jan-1998'),
     
    }
  )
}


}
