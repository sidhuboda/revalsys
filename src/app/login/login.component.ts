import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';

import { Router } from '@angular/router';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.invalid){
    return;
  }
    // this.router.navigate(['list']);
    this.router.navigate(['/list'], { queryParams: { sortType: 'hightolow' } });
  }


//   login: Login = new Login();
//   ngOnInit(): void {
//   }
// submitLoginForm(loginForm){
// console.log(loginForm.value);
// }
}
