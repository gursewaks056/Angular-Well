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



  constructor(private http : HttpClient, private _router : Router, private inOutService: InOutService  ) { 
  }

  ngOnInit() {
}

  userSignIn(){
    // console.log(this.email + ' and ' + this.pass);

    if(this.user.email == '' || this.user. pass == ''){
      alert('Fill all the blanks!');
    }

    else{
     /* this.http.post('http://localhost:4201/login/signin', { email : this.email, pass : this.pass })
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
      console.log('Done2');  */
      this.result = this.inOutService.verifyUser('http://localhost:4201/login/signin', this.user);
      console.log(this.result);
    }

  }

}
