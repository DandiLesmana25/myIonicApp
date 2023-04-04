import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  
  // ngambil data dari form login
  form = {
    username: localStorage.getItem('username') ,
    password: ''
  }

  constructor(private router: Router) { }

  doLogout(){
    this.router.navigateByUrl('home');
  }

  ngOnInit() {
  }


  

}
