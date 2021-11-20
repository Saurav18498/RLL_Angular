import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Custinterface } from './custinterface';

@Injectable({
  providedIn: 'root'
})
export class CustserviceService {
private _url: string=""

  constructor(private http: HttpClient) { }

  getcustservices(){
    return [
      {"id": 132453, "name": "SAniya Hendre", "Nid": 1,"email":"saniya.hendre@mphasis.com"}
  
  ]
}  

generatetoken(credentials:any)
{
  return this.http.post(`${this._url}`,credentials)
}





  loginuser(token:any)
  {
    localStorage.setItem("token",token)
    return token

  }

  isloggedin(){
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token == null)
    {
      return false;
    }else{
      return true;
    }
  }
    logout(){

      localStorage.removeItem('token');
      return true;
    }


    gettoken()
    {
      return localStorage.getItem("token");
    }
  
    
  
}
