import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InOutService {

  constructor(private http : HttpClient, private _router : Router) { 

  }

  postRequest(url, data){
    return this.http.post(url,data);
  }

}
