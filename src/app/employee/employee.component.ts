import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  queryId : number =0;
  queryID2 : number = 0;

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) {
    //  using params
    this.activatedRoute.params.subscribe(res =>{
      // debugger;
      this.queryId = res['id']
    })
    this.activatedRoute.queryParams.subscribe(res => {
      // debugger;
      this.queryID2 = res['id']
    })
    //  using snapshot
    const data = this.activatedRoute.snapshot
   }

 
  navigateToDataBind(){
    this.router.navigate(["data-binding", 3421])
  }
  



}
