import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[hotelEmail]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: EmailDirective, 
    multi: true,
  }
  ]
})
export class EmailDirective implements Validator {

  constructor() {

   }

   
   validate(control: AbstractControl<any>): ValidationErrors | null {

     const value :string = control.value as string;

     if(value != null  && value.includes('test')){

      
        return {
          invalidEmail: true
        }
      

     
     }

     return null
   }

}
