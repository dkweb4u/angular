import { Component, OnInit } from '@angular/core';
import { Products } from '../productinterface';
import { ProductsbdService } from '../services/productsbd.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hotel-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product : Products = {
    id : 0,
    title: '',
    description: '',
    image: '',
    rating: {rate : 0 , count: 0},
    price: 0
  }

  




  sdata : number =1000;

  date : Date = new Date();

successmessage : string ='';

  constructor(private allproducts: ProductsbdService, private actrouter: ActivatedRoute){
   
 

  }

  addproduct(formdata : NgForm) {

    this.allproducts.pushdata(this.product).subscribe((cproduct)=> (this.successmessage = 'Products Added Successfully'))


    formdata.reset();

  }


  restform(formdata: any){
    formdata.reset();

    // formdata.resetForm({
    //   id : 0,
    //   title: 'hello',
    //   description: '',
    //   image: '',
    //   rating: {rate : 0 , count: 0},
    //   price: 0
    // })

  }
 myrout !: any;
  currentBook !: any ;

  ngOnInit(): void {
    this.myrout = this.actrouter.snapshot.paramMap.get('product_id')
  }

}
