import { Component, OnInit } from '@angular/core';
import { leaveModel } from 'model';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  emp:leaveModel={}

  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id} = result
      console.log(id); 
      this.getEmpDetails(id)
    })

  }

  getEmpDetails(id:any){
    this.api.getAEmpAPI(id).subscribe((result:any)=>{
      this.emp=result
      console.log(this.emp);
  })
}

  updateUser(){
    this.api.updateEmpAPI(this.emp).subscribe((result:any)=>{
      console.log(result);   
     alert("User Updated Successfully...")
     this.router.navigateByUrl('/view')
    })
 }


}
