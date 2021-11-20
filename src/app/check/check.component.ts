import { Component, NgModule, OnInit } from '@angular/core';
import { CustComponent } from '../cust/cust.component';
import { Injectable } from '@angular/core';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlldetailsComponent } from '../alldetails/alldetails.component';
import { FoodMenuService } from '../food-menu.service';
declare const mytest:any;
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  public test: string = 'Tikka Masala';
  public ordersummary:any;
  public check3='product';
  item_list: string = '';
  no_of_items: string = '';
  ordereditems={
    order_item:'',
    quantity:''
  }

  public menu: any = [];

  constructor(private food_menu: FoodMenuService) {

  }

  ngOnInit(): void {
    this.food_menu.getmenulist()
      .subscribe(data => this.menu = data);

    

  }

  process(){
    if((this.ordereditems.quantity!='' && this.ordereditems.order_item!='' )&& (this.ordereditems.order_item!=null && this.ordereditems.quantity!=null ))
    {
      console.log("Thanks! You entered something",);

      for(let i of this.menu){
        if(i.f_name==this.ordereditems.order_item){

          mytest(i.price,this.ordereditems.quantity);

        }
      }

      

      this.food_menu.ordereditem(this.ordereditems).subscribe(
        (Response:any) =>{
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
