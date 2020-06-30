import {
    ValidationErrors,
    ValidatorFn,
    Validators,
    FormControl,
} from "@angular/forms";
import { isPresent } from "../util/lang";

export const arrayLength = (value: number): ValidatorFn => {
    return (control: FormControl): ValidationErrors => {
        if (isPresent(Validators.required(control))) {
            return null;
        }

        const obj = control.value;
        return Array.isArray(obj) && obj.length >= +value
            ? null
            : { arrayLength: { minLength: value } };
    };
};
