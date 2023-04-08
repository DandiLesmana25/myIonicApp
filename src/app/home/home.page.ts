import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  form = {
    username: '',
    password: ''
  }


  constructor(
    private router : Router
  ) {}

  
  
  // function  login/ketika pake local storage
  doLogin(){

    localStorage.setItem('username',this.form.username);
    localStorage.setItem('password',this.form.password);

// routingan dari page login ke page welcome
    this.router.navigateByUrl('welcome');
}
}