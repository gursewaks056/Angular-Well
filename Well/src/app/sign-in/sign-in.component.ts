import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InOutService } from '../services/in-out.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private user = {
      email : '',
      pass : ''
  };  
  
  private result;
  private login_status; 


  constructor(private http : HttpClient, private _router : Router, private inOutService: InOutService  ) { 
    //retreiving login status
    this.login_status =  (localStorage.getItem('loginStatus')||'false');   
  }

  ngOnInit() {
  
      if(this.login_status == 'true'){
        this._router.navigate(['profile']);
      }

  }

  userSignIn(){
    // console.log(this.email + ' and ' + this.pass);

    if(this.user.email == '' || this.user. pass == ''){
      alert('Fill all the blanks!');
    }

    else{
      this.inOutService.postRequest('http://localhost:4201/login/signin',this.user)
      .subscribe(data => {
        console.log('name -- ',data['name']);
        if(data['status'] === 200){
          alert('login successful!')
          localStorage.setItem('loginStatus','true');
          localStorage.setItem('name',data['name']);
          localStorage.setItem('phone',data['phone']);
          localStorage.setItem('email',data['email']);
          this._router.navigate(['profile']);
        }
      } , error => {
        console.log(error)
      })
      
      // console.log(this.result);
    }

  }

}
