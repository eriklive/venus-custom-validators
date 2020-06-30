import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const notEqualTo = (notEqualControl: FormControl): ValidatorFn => {
  let subscribe = false;
  return (control: FormControl): ValidationErrors => {
    if (!subscribe) {
      subscribe = true;
      notEqualControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    const v: string = control.value;

    if (notEqualControl.value == null && v == null) {
      return null;
    }

    return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
  };
};
