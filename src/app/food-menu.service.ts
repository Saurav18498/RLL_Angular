import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuList } from './menu-list';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  public url:string="http://localhost:8080/canteenmgmtsystem/canteen/createOrder";

  constructor(private http: HttpClient) { }

  getmenulist():Observable<MenuList[]>{
    return this.http.get<MenuList[]>("http://localhost:8080/canteenmgmtsystem/food/allfood");
  }

  ordereditem(ordereditems:any)
  {
    return this.http.post(`${this.url}`,ordereditems)
  }

  

}
