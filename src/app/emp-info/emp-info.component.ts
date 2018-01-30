import { Component, OnInit } from '@angular/core';
import {Iporfile}from  '../Iprofile';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {
empProfile:Iporfile;
  constructor() { }

  ngOnInit() {
  }

}
