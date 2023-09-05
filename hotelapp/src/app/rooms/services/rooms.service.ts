import { Injectable } from '@angular/core';
import { RoomList } from '../roomInterface';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomdata : RoomList[]= []

  constructor(private http: HttpClient) { 
   
  }

  getRooms(){
 
return this.http.get<RoomList[]>('https://fakestoreapi.com/products');

  }

  


}
