import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  firstName :string = "Raja";
  lastName : string = "sekhar";
  currentDate :Date = new Date();
  isTrue :boolean = false;
  checkNum : number = 341;

  inputType : string= "checkBox" ;
  inputType2  : string = "radio";
  isNum : string = "number";
  noofrows : number = 3
  subString :string = "Angular";
  addString :string = " course"

  studentobj :any = {
    name : '',
    city : '',
    address : ''
  }
  
  btnFn1(message : string){
    alert(message)
  }
  
  btnFn2(){
    alert("this is hello button")
  }
  //  EVENT BINDING
  changeEvent(event : any){
    // debugger;
    this.subString = event.target.value;
  }
  



}
