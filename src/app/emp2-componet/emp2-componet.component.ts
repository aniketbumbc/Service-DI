import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-emp2-componet',
  templateUrl: './emp2-componet.component.html',
  styleUrls: ['./emp2-componet.component.css']
})
export class Emp2ComponetComponent implements OnInit {

  public employee = [];
  public errorMsg;
  constructor(public _empservice: EmployeeService) { }  // local variable give instances of employee services 
  ngOnInit() {

    this.employee = this._empservice.getEmployee();
  }

  
}
