import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  getEmployee() {
    return [
      { "id": 1, "name": "Aniket", "city": "Baltimore" },
      { "id": 2, "name": "Ani", "city": "Balt" },
      { "id": 3, "name": "ket", "city": "more" },
    ]
  }

}
