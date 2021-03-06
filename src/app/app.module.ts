import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Emp1ComponetComponent } from './emp1-componet/emp1-componet.component';
import { Emp2ComponetComponent } from './emp2-componet/emp2-componet.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';


@NgModule({
  declarations: [
    AppComponent,
    Emp1ComponetComponent,
    Emp2ComponetComponent,
    EmpInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
