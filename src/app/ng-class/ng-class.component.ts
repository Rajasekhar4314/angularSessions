import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {



  div1class :string = 'bg-success';
  // isDiv1 = true
  isActive : boolean = false;
  div3class :string = '';

  addGreen(){
    this.div1class = 'bg-success'
  }
  addRed(){
    this.div1class = 'bg-danger'
  }

  mobile :any = ["samsung", "Apple", "Mi"]

  showMobiles(){

  }
}
