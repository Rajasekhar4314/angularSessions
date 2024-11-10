import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes :Routes =[
  {path : "data-binding/:id", component : DataBindingComponent},
  {path : "structural-dir", component : StructuralDirComponent},
  {path : "employee/:id", component : EmployeeComponent, data:{name:"raja", gender :"M"}},
  {path : "ngfor", component : NgForComponent},
  {path: "ngclass", component: NgClassComponent},
  {path: "ngstyle", component: NgStyleComponent},
  {path : 'create-employee', component : CreateEmployeeComponent},
  {path : 'template-form', component : TemplateFormComponent},
  {path : "reactive-form", component : ReactiveFormComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})

export class AppRoutingModule { }
