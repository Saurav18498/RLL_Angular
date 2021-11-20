import { Component, OnInit } from '@angular/core';
import { Custinterface } from '../custinterface';
import { CustserviceService } from '../custservice.service';
import { CustregistrationService } from '../custregistration.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {

  recredentials={
    ename:'',
    password:'',
    gender:''
    
    

  };
  
  public signupForm !: FormGroup;
  constructor(private custregistration:CustregistrationService, private formBuilder: FormBuilder, private http :HttpClient, private router:Router) { }

  ngOnInit(): void {
    
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']

    })


  }
  
 

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe((resr:any)=>{
      alert("Signup Successfully!");
      this.signupForm.reset();
      this.router.navigate(['signin']);
    },err=>
    alert("Something Went wrong!")
    
  )
  }
}