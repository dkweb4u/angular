import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Products } from './productinterface';
import { ProductsbdService } from './services/productsbd.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable, Subscription, config } from 'rxjs';
import { InitService } from '../init.service';
import { ConfigService } from '../services/config.service';
import {BookingComponent} from './booking/booking.component'
import {AddproductComponent} from './addproduct/addproduct.component'


@Component({
  selector: 'hotel-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterContentInit, OnDestroy {
  products: Products[] = [];

  constructor(private allproducts: ProductsbdService, private initservice : InitService, private configSerice: ConfigService) {

    console.log("json file", initservice.config)

    this.allproducts.getdata().subscribe((product) => {
      this.products = product;
    });


  this.subscription =  this.allproducts.fetchproduct$.subscribe((data)=>{
      console.log(data)

      this.products = data

    })



  }

  streem = new Observable((observer) => {
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
    // observer.error
  });

  add() {
    const product: Products = {
      id: 1,
      title: 'test product',
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      rating: { rate: 4.6, count: 400 },
      price: 13.5,
    };

    this.allproducts.pushdata(product).subscribe((ppdata) => {
      this.products = ppdata;

      console.log(ppdata);
    });
  }

  editProducts() {
    const product: Products = {
      id: 10,
      title: 'test product',
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      rating: { rate: 4.6, count: 400 },
      price: 15.5,
    };

    this.allproducts.editproduct(product).subscribe((data) => {
      // this.products = data

      this.products = data;

      console.log(data);
    });
  }

  deletebtn() {
    this.products.pop();

  }

  error: string =""

  totalbyte = 0;

  subscription !: Subscription;

  ngOnInit(): void {


    

    this.streem.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('completed'),
      error: (err) => console.log(err),
    });

    this.streem.subscribe((data) => {
      console.log(data);

    });

    // -----------------------------------------------------------

    this.allproducts.getphotos().subscribe((event) => {

      console.log("=======================================================================================");
      

      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalbyte += event.loaded;
          break;
        }

        case HttpEventType.Response: {
          console.log(event.body)
        }

      }
    });
  }

  ngAfterContentInit(): void {}

ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe();
  }
}

}
