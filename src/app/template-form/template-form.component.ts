import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  userArray :any[] = [];
  userBus :any[] = [];
  // userObj for post api
  userObj : any = { 
    "id" : 1, 
    "name": "",
    "username": "",
    "email": ""
    
  }

  //  busobject  projectName, refreshToken are done by api side

  busObj :any ={
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  }

  constructor(private http : HttpClient){}

  //  GET API
  getUser(){
    const userdata = this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      this.userArray = res;
    })
  }

  getBusData(){
    const userdata = this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe((res:any) => {
      this.userBus = res.data;
    })
  }

  //  POST API
  // saveUser(){
  //   debugger;
  //   this.http.post("https://jsonplaceholder.typicode.com/users", this.userObj).subscribe((res:any) =>{
  //     debugger
  //   })
  // }

  saveUser(){
    // debugger;
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/AddNewUser", this.busObj).subscribe((res:any) =>{
      // debugger;
      if(res.result){
        alert("user added succesfully")
        this.busObj ={
          "userId": 0,
          "userName": "",
          "emailId": "",
          "fullName": "",
          "role": "",
          "createdDate": new Date(),
          "password": "",
          "projectName": "",
          "refreshToken": "",
          "refreshTokenExpiryTime": new Date()
        }
      } else{
        res.message
      }
    })
  }

  // +++++++  EDIT USER

  editUser(user :any){
    console.log("check user data",user)
    // this.busObj = user;   // It will create a link , see what is updating in table
    // debugger;
    const strObj = JSON.stringify(user);
    const parseObj = JSON.parse(strObj)
    this.busObj = parseObj;  // add which form you are using to the user...
  }

  updateUser(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/UpdateUser", this.busObj).subscribe((res:any) =>{
      debugger;
      if(res.result){
        alert("user updated succesfully")
        this.busObj ={
          "userId": 0,
          "userName": "",
          "emailId": "",
          "fullName": "",
          "role": "",
          "createdDate": new Date(),
          "password": "",
          "projectName": "",
          "refreshToken": "",
          "refreshTokenExpiryTime": new Date()
        }
      } else{
        res.message
      }
    })
  }

// +++++++++  DELETE USER

  deleteUser(id :number){
    const isConfirm = confirm("Do you really want to Delete ?")
    debugger;
    if(isConfirm){
      this.http.delete("https://projectapi.gerasim.in/api/BusBooking/DeleteUserByUserId?userId=" +id).subscribe((res:any) =>{
        debugger;
        if(res.result){
          alert("User deleted")
          this.getBusData()
        } else{
          res.message
        }
      })
    }  
  }

}

