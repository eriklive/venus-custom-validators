import { FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const lt = (value: number): ValidatorFn => {
  return (control: FormControl): ValidationErrors => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: number = +control.value;
    return v < +value ? null : { lt: { value: value } };
  };
};
