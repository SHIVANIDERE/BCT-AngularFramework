import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(f:NgForm){
    
    if(this.service.login(f.value))
    {
      this.router.navigate(['/']);
    }
    else
    {
      alert("Incorrect Username or password");
    }
  }
}
