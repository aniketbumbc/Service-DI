import { Component, OnInit } from '@angular/core';
import {Iporfile}from  '../Iprofile';
import{EmpInfoService} from '../emp-info.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {
//empProfile:Iporfile;
ProfileList:Iporfile[];
  constructor(private _empService:EmpInfoService) { 
  }

  ngOnInit() {
    this.ProfileList=this._empService.getProfile();
    //this.empProfile=this.ProfileList[0];
  }

}
