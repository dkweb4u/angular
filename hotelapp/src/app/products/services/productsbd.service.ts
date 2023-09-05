import { Injectable } from '@angular/core';
import { Products } from '../productinterface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsbdService {

  header = new HttpHeaders({tokan: '12234837274682yyy',data: 'dkdkdkd'})



  products : Products[] =[];

  constructor(private http : HttpClient){

  }

  // ================================   get() ======================================================================
  getdata(){
    return this.http.get<Products[]>('https://fakestoreapi.com/products')
  }
// ====================================== post()  ===================================================================
  pushdata( data : Products){
    return this.http.post<Products[]>('https://fakestoreapi.com/products', data)
  }

  // =========================================================================

  // update(title : string , description: string){
  //   return this.products.map((product) =>{
  //     if(product.title == title ){
  //       return description;
  //     }

  //     return product

  //   })
  // }

  // ========================================= put() ==============================================================


  editproduct(product : Products){
    return this.http.put<Products[]>('https://fakestoreapi.com/products/'+1,product)
  }

  // ========================================= Delete ==============================================================


  deleteproduct(id: number){
    return this.products.filter((product) => {
      product.id !== id;
    })
  }

  // removebtn(id: number){
  //   return this.products.filter((product)=>{
  //     product.id !== id;
  //   })
  // }

  // ========================================= HttpRequest ==============================================================

  getphotos(){
    const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',
    {
      reportProgress: true,

    });

    return this.http.request(request)
  }

// =========================================== Rxjs operators ================================================================

fetchproduct$ = this.http.get<Products[]>('https://fakestoreapi.com/products').pipe(
  shareReplay(1)
)


}
