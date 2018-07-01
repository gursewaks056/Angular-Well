import { Directive, Input, Output, HostListener, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassValidator]'
})
export class PassValidatorDirective {

  private primePass;
  
  @Output() checkValidPass : EventEmitter<any> = new EventEmitter();
  @Input('appPassValidator') otherPassField;

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
