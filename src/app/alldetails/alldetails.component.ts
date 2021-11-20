import { Component, OnInit } from '@angular/core';
import { Custinterface } from '../custinterface';
import { CustserviceService } from '../custservice.service';

@Component({
  selector: 'app-alldetails',
  templateUrl: './alldetails.component.html',
  styleUrls: ['./alldetails.component.css']
})
export class AlldetailsComponent implements OnInit {
  public cse  : Custinterface[]= [];
  check3 = "sinha";
  check1="ww";
  constructor(private _cse: CustserviceService) { }


  ngOnInit(): void {
  }
 onclick(){
    
    this.cse = this._cse.getcustservices();
    this.cse;
   
    
    
  }
 
}
function subscribe(arg0: (data: any) => any) {
  throw new Error('Function not implemented.');
}

