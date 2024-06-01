import { ListRange } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { leaveModel } from 'model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // emp:leaveModel={}
  // allEmp:any =[] 

  server_url="https://leave-management-server.onrender.com"
  constructor(private http:HttpClient) { }

  //login     
  authenticateAPI(email:string,password:string){
    return this.http.get(`${this.server_url}/emp/1`).subscribe((result:any)=>{
       if(result.email==email && result.password==password){
         sessionStorage.setItem("adminDetails",JSON.stringify(result))
         alert("Login Success")
       }else{
         alert("Invalid email/password")
       }
     })
   }

   //apply leave
   saveLeaveAPI(emp:leaveModel){
    return this.http.post(`${this.server_url}/emp`,emp)
   }
 
   getAllEmpAPI(){
    return this.http.get(`${this.server_url}/emp`)
   }

  //  edit
  updateEmpAPI(emp:leaveModel){
    return this.http.put(`${this.server_url}/emp/${emp.id}`,emp)

  }

  //get a emp

  getAEmpAPI(id:any){
    return this.http.get(`${this.server_url}/emp/${id}`)

  }

  //delete

  removeEmpAPI(id:any){
    return this.http.delete(`${this.server_url}/emp/${id}`)

  }




 


}
