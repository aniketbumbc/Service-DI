import { Injectable } from '@angular/core';
import {Iporfile} from './Iprofile';

@Injectable()
export class EmpInfoService {
getProfile():Iporfile[]{
  return[{
    Name:'Bunny',
    Age:23,
    School:'UMBC'
  },
  {
    Name:'Batman',
    Age:33,
    School:'NYC'
  },

  {
    Name:'Superman',
    Age:30,
    School:'Standford'
  },
]
}
 }
