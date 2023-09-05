import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'hotel-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username !: string;
  password !: string;

  result :string = "";

  constructor( private route : Router, private logged: LoginserviceService){
   
  }

  securelog(logindata : NgForm){

  
    
    if(this.logged.Login(logindata.value.name, logindata.value.password)){
      this.route.navigate(['/home'])
    }
    else{
      this.result = "You Did Wrong credials";
    }
  }

  // loggin(logindata : NgForm){

    
  //  if(logindata.value.name =="admin" && logindata.value.password == 123){

  //   this.result = "logged in successfully"

  //   // this.route.navigateByUrl('/home/add')

  //   // this.route.navigate(['/home','add'])


  //  }

  //  else if(logindata.value.name != 'admin'){
  //   this.result = "Wrong User Name";
  //  setTimeout(() => {
  //   this.result="";
  //  }, 3000);
  //  }


  //  else{
  //   this.result = "Wrong password"
  //  setTimeout(() => {
  //   this.result="";
  //  }, 3000);
  //  }

  // }




}
