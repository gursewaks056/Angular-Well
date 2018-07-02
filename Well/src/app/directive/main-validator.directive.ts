import { Directive, Output, HostListener, EventEmitter, ElementRef, Input } from '@angular/core';
import { InputValidationService } from '../services/input-validation.service';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective {

  private email;
  private regExp;

  @Output('appEmailValidator') validator  : EventEmitter<any> = new EventEmitter();

  constructor(private el : ElementRef) { 
    this.regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  @HostListener("input",["$event.target.value"]) oninput(el) {

    if(this.el.nativeElement.name == 'user.email'){
      this.email = String(this.el.nativeElement.value);
      this.validate();
    }
  }
  
  validate(){  
    if (this.regExp.test(this.email)) {      
      this.validator.emit(true);
    }
    else{
      this.validator.emit(false);
    }  
  }

}


// 2 Name Validator
@Directive({
  selector: '[appNameValidator]'
})
export class NameValidatorDirective {

  private name;
  private trap;

  @Output('appNameValidator') validator  : EventEmitter<any> = new EventEmitter();

  constructor(private el : ElementRef, private inputValidationService : InputValidationService) { }

  @HostListener("input",["$event.target.value"]) oninput(el) {

    if(this.el.nativeElement.name == 'user.name'){
      this.name = String(this.el.nativeElement.value);
      this.validate();
    }
  }
  
  validate(){  
      if(this.name.length >= 3){
        this.inputValidationService.setInputValidValue(true);
        this.validator.emit(true);
     
      }
      else{
        this.inputValidationService.setInputValidValue(false);
        this.validator.emit(false);
      }
  }

}




// 4 - 
@Directive({
  selector: '[appPhoneValidator]'
})
export class PhoneValidatorDirective {

  private phone;

  @Output('appPhoneValidator') validator  : EventEmitter<any> = new EventEmitter();

  constructor(private el : ElementRef) { }

  @HostListener("input",["$event.target.value"]) oninput(el) {

    if(this.el.nativeElement.name == 'user.phone'){
      this.phone = String(this.el.nativeElement.value);
      this.validate();
    }
  }
  
  validate(){  
      if(this.phone.length == 10){
        this.validator.emit(true);
      }
      else{
        this.validator.emit(false);
      }
  }

}


// 3 - pass
@Directive({
  selector: '[passValidator]'
})
export class PassValidatorDirective {

  private primePass;
  
  @Output() checkValidPass : EventEmitter<any> = new EventEmitter();
  @Input('passValidator') otherPassField;

  constructor(private el : ElementRef) { }

  @HostListener("input",["$event.target.value"]) oninput(el) {

    if(this.el.nativeElement.name == 'user.pass' || this.el.nativeElement.name == 'user.rePass'){
      this.primePass = String(this.el.nativeElement.value);
      this.validate();
    }
  }
  
  validate(){  
    if(this.primePass == this.otherPassField){
      this.checkValidPass.emit(true);
      console.log('valid pass');
      }
    else{
      this.checkValidPass.emit(false);
    }
}

}
