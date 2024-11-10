import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgModule,
    NgModel,
    ReactiveFormsModule
  ],
  providers: [FormsModule, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
