import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private login_status ; 
  private name = '';
  private phone = '';
  private email = '';

  constructor(private _router : Router) { 
    this.login_status = (localStorage.getItem('loginStatus')||'false');
    this.name = localStorage.getItem('name') || 'false';
    this.phone = localStorage.getItem('phone') || 'false';
    this.email = localStorage.getItem('email') || 'false';
    console.log('user---',this.name);
    console.log('user---',this.phone);
    console.log('user---',this.email);
  }

  ngOnInit() {
    if(this.login_status == 'false'){
      this._router.navigate(['signin']);
    }
  }

  userLogOut(){
    alert('logout');
    console.log('logout user');
    localStorage.removeItem('loginStatus'); // removing from local storage
    this._router.navigate(['signin']);
  }

}
