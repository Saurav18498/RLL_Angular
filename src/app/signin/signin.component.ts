import { Component, OnInit } from '@angular/core';
import { CustserviceService } from '../custservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SigninComponent implements OnInit {
  test1:string='';
  credentials={
    username:'',
    password:'',
    token:''
  }
public loginForm!: FormGroup
  constructor(private custservice:CustserviceService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe((res:any)=>{
      const user =res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        alert("Login Sucess");
        
        
       window.location.href="/check";
       // this.router.navigate(['displaypageforcustomer'])
       this.loginForm.reset();
        return true;
        
      }else{
        alert("Not Found!")
        return false;
      }
    },err=>{
      alert("Something Went Wrong!!")
      return false;
    }
    )
  }
  
}
