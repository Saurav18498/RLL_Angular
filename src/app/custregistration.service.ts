import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Custinterface } from './custinterface';

@Injectable({
  providedIn: 'root'
})
export class CustregistrationService {

  private _url1: string="http://localhost:8080/springmvcproj/employee/createEmployee";
  constructor(private http: HttpClient) { }



  registration(recredentials:any)
  {
    return this.http.post(`${this._url1}`,recredentials)
  }



}
