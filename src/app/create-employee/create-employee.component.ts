import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent  {

  employeeObj :any = {
    name : '',
    contact : '',
    email : '',
    position : '',
    department : '',
    joiningDate : ''
  }

  onSave(){
    debugger;
    const form = this.employeeObj;
  }

}
