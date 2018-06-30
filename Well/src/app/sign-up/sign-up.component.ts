import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private name='';
  private phone='';
  private email='';
  private pass='';
  private rePass='';



  constructor(private http : HttpClient, private _router : Router) { 
  }

  ngOnInit() {
  }

  userSignUp(){
    // console.log(this.name + this.phone + this.email + this.pass + this.rePass);

    if( this.name == '' || this.phone == '' ||this.email == '' ||this.pass == '' ||this.rePass == ''){      
        alert('Fill the blanks'); 
    }

    else if(this.pass != this.rePass){
      alert("password should be matched");
    }

    else{
        this.http.post('http://localhost:4201/login/signup',{ name: this.name, phone : this.phone, email : this.email, pass : this.pass })
        .subscribe(data => {
          console.log(data);
        } , error => {

        })
        console.log("done1");
        alert('Registration Successful!');
        this._router.navigate(['signin']);
    }
   

  }

}
