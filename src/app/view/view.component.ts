import { Component, OnInit } from '@angular/core';
import { leaveModel } from 'model';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  allEmp:leaveModel[]=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getALLEm()
  }
getALLEm(){

  return this.api.getAllEmpAPI().subscribe((res:any)=>{
    this.allEmp =res
    console.log(this.allEmp);

  })

}

getAllEmp(){
  this.api.getAllEmpAPI().subscribe((result:any)=>{
    this.allEmp = result.filter((user:any)=>user.id!="1")
    console.log(this.allEmp);
    
  })
}


deleteUser(id:any){
  this.api.removeEmpAPI(id).subscribe((result:any)=>{
    this.getALLEm()
  })
}


}
