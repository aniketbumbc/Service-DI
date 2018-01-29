import { Component, OnInit } from '@angular/core';
import{EmployeeService}from "../employee.service";

@Component({
  selector: 'app-emp1-componet',
  templateUrl: './emp1-componet.component.html',
  styleUrls: ['./emp1-componet.component.css']
})
export class Emp1ComponetComponent implements OnInit {
employee=[];
  constructor(private  _empservice:EmployeeService) { }  // local variable give instances of employee services 

  ngOnInit() {

    this.employee=this._empservice.getEmployee();
  }

}
