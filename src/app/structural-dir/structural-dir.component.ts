import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent  {

  isDiv1Visible : boolean = true
  div2Visible : string = "no"

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  checkDiv2(){
    // if(this.div2Visible == "yes"){
    //   this.div2Visible = "no"
    // }else{
    //    this.div2Visible = "yes"
    // }
    this.div2Visible = this.div2Visible == "yes" ? "no" : "yes"
  }

  constructor(
    private router : Router,
    private activeRoute : ActivatedRoute
  ) {}
  

  //  Div 3
  num1 : string='';
  num2 : string='';

  //  div 4
  otherCaste : string = '';
  selectGender : string = '';
  category : string = '';
  laptop : string = '';
  camera : string = '';
  selectCategory : string = '';
  
  checkMaleFe : string = "radio"
  callFnMen(message : any){
    alert(message)
  }

  x : any = '';
  callMobile(){
    this.x = "oppo, samsung, apple"
  }

  // ++++++++++++++ WITHOUT PARAMS
  navigateDataBinding(){
    this.router.navigateByUrl('data-binding/34324')
    // this.router.navigate(['/data-binding/245346'])
  }
  navigateEmployee(){
    // this.router.navigateByUrl('data-binding')
    this.router.navigate(['/employee/', 3462])
  }

  // navigate(){
  //   debugger;
  //   this.activeRoute.snapshot.paramMap.get('id')
  // }


}
