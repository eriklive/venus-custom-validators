import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

import { email } from './validator';

const EMAIL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true,
};

@Directive({
  selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
  providers: [EMAIL_VALIDATOR],
})
export class EmailValidator implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    return email(c);
  }
}
