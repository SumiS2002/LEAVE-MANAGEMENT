import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""


  constructor(private api:ApiService){}


  login(){
    if(this.email && this.password){
      this.api.authenticateAPI(this.email,this.password)
    }else{
      alert("Please fill the form")
    }
  }

}
