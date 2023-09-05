import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './hover.directive';
import { EmailDirective } from './emailvalidater/email.directive';
import { BookingComponent } from './products/booking/booking.component';







@NgModule({
  declarations: [
    AddproductComponent,
    LoginComponent,
    BookingComponent,
    HoverDirective,
    EmailDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],


})
export class ProductsModule { }
