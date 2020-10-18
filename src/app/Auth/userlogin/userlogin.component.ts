import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  constructor(private router:Router) { }
// private authService:AuthService,
  ngOnInit(): void {
  }

  
  userName:string
  password:string

  login(formValues)
  {
    console.log("login values : "+formValues)
    console.log("userName : "+formValues.userName);
    console.log("password : "+formValues.password);
  }

}
