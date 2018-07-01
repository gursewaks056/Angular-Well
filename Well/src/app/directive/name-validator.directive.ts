import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { InputValidationService } from '../services/input-validation.service';

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
