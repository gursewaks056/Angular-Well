import { Directive, Output, HostListener, EventEmitter, ElementRef } from '@angular/core';

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
