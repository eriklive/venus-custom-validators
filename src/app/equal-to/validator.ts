import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const equalTo = (equalControl: FormControl): ValidatorFn => {
  let subscribe = false;

  return (control: FormControl): ValidationErrors => {
    if (!subscribe) {
      subscribe = true;
      equalControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    const v: string = control.value;

    return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
  };
};
