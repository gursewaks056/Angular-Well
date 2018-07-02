import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InOutService {

  constructor(private http : HttpClient, private _router : Router) { 

  }

  registerUser(url, params){
      return this.http.post(url,params)
      .subscribe(data => {
        console.log(data);
      } , error => {
        console.log(error)
      })
  }


  verifyUser(url, params){
    return this.http.post(url,params)
    .subscribe(data => {
          console.log(data);
          if(data['status'] == 200){
            alert('Login Successful!');
            this._router.navigate(['profile']);
          }
          else{
            alert('Login Failed');
          }
    } , error => {
      console.log(error)
    })
  }


}
