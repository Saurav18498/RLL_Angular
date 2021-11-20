import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()  item :any;
  @Input()  itemquantity :any;
  constructor() { }

  ngOnInit(): void {
  }
onbt(){}
  

}
