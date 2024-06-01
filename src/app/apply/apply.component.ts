import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { leaveModel } from 'model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit{
  emp:leaveModel={}
  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    
  }

  applyLeave(){
    this.api.saveLeaveAPI(this.emp).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Leave applied successfully")
        this.router.navigateByUrl('/view')
        
      },error:(err:any)=>{
        console.log(err);
      }

    })
  }

}
