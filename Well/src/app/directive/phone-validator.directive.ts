import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

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
