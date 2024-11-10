import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent  {

  div1color :string = '';

  isActive :boolean = true;

  css_key :String = '';
  css_value :string = ''

  myStyle :any= {
    color : 'white',
    'background-color' : 'green',
    'font-size' : '20px'
  }


  addDiv1color(color:string){
    this.div1color = color;
  }

}
