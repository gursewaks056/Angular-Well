import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InputValidationService } from '../services/input-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private user = {
    name : '',
    phone : '',
    email : '',
    pass : '',
    rePass : ''
  };

  private disableValue;

  constructor(private http : HttpClient, private _router : Router, private inputValidationService : InputValidationService ) { 
    this.disableValue = this.inputValidationService.getInputValidValue(); 
  }


  ngOnInit() {
  }

  
  userSignUp(){
    // console.log(this.name + this.phone + this.email + this.pass + this.rePass);

    if( this.user.name == '' || this.user.phone == '' ||this.user.email == '' ||this.user.pass == '' ||this.user.rePass == ''){      
        alert('Fill the blanks'); 
    }

    else if(this.user.pass != this.user.rePass){
      alert("password should be matched");
    }

    else{
        this.http.post('http://localhost:4201/login/signup', this.user)
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
