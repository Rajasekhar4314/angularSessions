import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  userList :any[] = [];

  userForm : FormGroup = new FormGroup ({
    userId : new FormControl(0),
    userName : new FormControl(""),
    emailId : new FormControl(""),
    fullName : new FormControl(""),
    role :new FormControl(""),
    createdDate : new FormControl(new Date()),
    password : new FormControl(""),
    projectName : new FormControl(""),
    refreshToken : new FormControl(""),
    refreshTokenExpiryTime : new FormControl(new Date()),
  })

  // userBus :any[] = [];

  constructor(private http : HttpClient){}

  getUsers2(){
    const userdata = this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe((res:any) => {
      this.userList = res.data;
    })
  }

  
  editUser(user:any){

  }

  deleteUser(id:number){

  }
}
