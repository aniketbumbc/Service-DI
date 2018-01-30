import { Component } from '@angular/core';
import {EmployeeService}from './employee.service';
import{EmpInfoService}from './emp-info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService,EmpInfoService]
})
export class AppComponent {

}
