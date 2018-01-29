import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";


@Component({
  selector: 'app-emp1-componet',
  template: `
  <h2>Employee List and name </h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let emplo of employee">
    <li>
    {{emplo.id}}
     {{emplo.name}} 
 
     
     </li>
  </ul>
`,
  styles: []

})
export class Emp1ComponetComponent implements OnInit {
  public employee = [];
  public errorMsg;
  constructor(public _empservice: EmployeeService) { }  // local variable give instances of employee services 
  ngOnInit() {

    this.employee = this._empservice.getEmployee();
  }

}
