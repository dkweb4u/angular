import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  isLoggedIn : boolean = false;



  Login(email: string, password: string ){
    if(email =="admin" && password == '123'){
      
      this.isLoggedIn = true

    }
 
    else{
      this.isLoggedIn = false;
    }

    return  this.isLoggedIn ;

  }

}
