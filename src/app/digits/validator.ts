import { FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const digits: ValidatorFn = (control: FormControl): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return /^\d+$/.test(v) ? null : { digits: true };
};
