import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private email = '';
  private pass = '';



  constructor(private http : HttpClient, private _router : Router) { 
  }

  ngOnInit() {
}

  userSignIn(){
    // console.log(this.email + ' and ' + this.pass);

    if(this.email == '' || this.pass == ''){
      alert('Fill all the blanks!');
    }

    else{
      this.http.post('http://localhost:4202/loginCheck', { email : this.email, pass : this.pass })
      .subscribe(data =>{
          console.log('data---',data['status']);
          if(data['status'] == 200){
            alert('Login Successful!');
            this._router.navigate(['profile']);
          }
          else{
            alert('Login Failed');
          }
      }, error => {

      })
      console.log('Done2');

    }

  }

}
