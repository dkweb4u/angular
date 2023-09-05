import { CanActivateFn } from '@angular/router';
import { BookingComponent } from './booking/booking.component';

import {Inject} from '@angular/core';

export const samplehideGuard: CanActivateFn = (route, state) => {

 
  return Inject(BookingComponent).bookingForm.pristine;
};
