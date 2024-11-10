import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent  {

  cities : any = ["Hyd", "Bangalore", "Mumbai", "Delhi"]
  ct : string = '';

 

  studentObj : any = [
    {Id :101, isActive:true, name : "Raja", city : "Hyd", cellNo:"4523623"},
    {Id :102, isActive:false, name : "sai", city : "Delhi", cellNo:"23587342"},
    {Id :103, isActive:false, name : "Vijay", city : "Mumbai", cellNo:"734532123"},
    {Id :104, isActive:true, name : "Chand", city : "Chennai", cellNo:"9235901820"}
  ]

  constructor() { }

  res :any;
  addCity(){

    // this.res = this.cities.find((x: { ct: string; })=> {x.ct == this.ct})
    const isCityExists = this.cities.find((x: string) => x ==this.ct)
    debugger;
    if(isCityExists == undefined){
      this.cities.push(
        this.ct
      )
    }else(
      alert("Can't add more !")
    )

  }

//  TASK2
userSelectedCity : string = '';

  selectCity(city:string){
    this.userSelectedCity = city
  }

//  TASK3

userNumber :any ;

arrayofnos : any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  calTable(num : any){
    this.userNumber = num
  }

}
