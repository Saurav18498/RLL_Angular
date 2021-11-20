import { Component, NgModule, OnInit } from '@angular/core';
import { CustComponent } from '../cust/cust.component';
import { Injectable } from '@angular/core';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlldetailsComponent } from '../alldetails/alldetails.component';
import { FoodMenuService } from '../food-menu.service';
@Component({
  selector: 'app-displaypageforcustomer',
  templateUrl: './displaypageforcustomer.component.html',
  styleUrls: ['./displaypageforcustomer.component.css']
})
export class DisplaypageforcustomerComponent implements OnInit {
  public test: string = 'Tikka Masala';
  
  public check3='product';
  item_list: string = '';
  no_of_items: string = '';
  ordereditems={
    item_list:'',
    no_of_items:''
  }

  public menu: any = [];

  constructor(private food_menu: FoodMenuService) {

  }

  ngOnInit(): void {
    this.food_menu.getmenulist()
      .subscribe(data => this.menu = data);

    

  }

  process(){
    if((this.item_list!='' && this.no_of_items!='' )&& (this.item_list!=null && this.no_of_items!=null ))
    {
      console.log("Thanks! You entered something",);

      this.food_menu.ordereditem(this.ordereditems).subscribe(
        (Response:any)=>{
          console.log(Response);
          window.location.href="/done";
          //if gets sucessful
        },(error:any)=>{
          
          console.log(error);
        }
      )

    }
    else{
      console.log("Enter something ");
    }
  }
  



}
