import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {

  private input_valid;

  constructor() { 
    this.input_valid = false;
  }

  setInputValidValue(value){
    this.input_valid = value;
    console.log('set input value = '+value);
  }

  getInputValidValue(){
    return this.input_valid;
  }

}
