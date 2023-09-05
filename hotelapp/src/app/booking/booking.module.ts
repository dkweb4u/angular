import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { routeConfigs } from '../services/routerconfig-services';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,

  ]
  ,
  providers:[
    {
      provide: routeConfigs,
      useValue: {title: 'Room'}
    },
  ]
})
export class BookingModule { }
