import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {



  constructor(private _router : Router) { 

  }

  ngOnInit() {
  }

  userLogOut(){
    alert('logout');
    console.log('logout user');
    this._router.navigate(['signin']);
  }

}
