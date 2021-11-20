import { Component, OnInit } from '@angular/core';
import { Custinterface } from '../custinterface';
import { CustserviceService } from '../custservice.service';

@Component({
  selector: 'app-profilepageforcustomer',
  templateUrl: './profilepageforcustomer.component.html',
  styleUrls: ['./profilepageforcustomer.component.css']
})
export class ProfilepageforcustomerComponent implements OnInit {
  public cse1  : Custinterface[]= [];
  constructor(private _cse1: CustserviceService) { }

  ngOnInit(): void {
    this.cse1 = this._cse1.getcustservices();
    this.cse1;
  }

}
