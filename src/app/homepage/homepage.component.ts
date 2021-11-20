import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
img:string ="https://www.asia-bars.com/wp-content/uploads/2011/03/canteen-plaza-indonesia001.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
